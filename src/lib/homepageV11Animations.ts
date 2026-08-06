import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type V11AnimationCleanup = () => void;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const safeRegisterScrollTrigger = () => {
  if (!gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
};

export const initV11ProofMetricsCountUp = (root: ParentNode = document): V11AnimationCleanup => {
  if (prefersReducedMotion()) return () => undefined;
  safeRegisterScrollTrigger();

  const triggers: ScrollTrigger[] = [];
  root.querySelectorAll<HTMLElement>('[data-v11-countup]').forEach((el) => {
    const target = Number(el.dataset.v11Countup || '0');
    const suffix = el.dataset.v11Suffix || '';
    const prefix = el.dataset.v11Prefix || '';
    const state = { value: 0 };

    const tween = gsap.to(state, {
      value: target,
      duration: 1.05,
      ease: 'power2.out',
      paused: true,
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(state.value)}${suffix}`;
      },
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 86%',
      once: true,
      onEnter: () => tween.play(),
    });

    triggers.push(trigger);
  });

  return () => triggers.forEach((trigger) => trigger.kill());
};

export const initV11SequentialReveal = (
  selector: string,
  root: ParentNode = document,
): V11AnimationCleanup => {
  if (prefersReducedMotion()) return () => undefined;
  safeRegisterScrollTrigger();

  const triggers: ScrollTrigger[] = [];
  root.querySelectorAll<HTMLElement>(selector).forEach((section) => {
    const items = section.querySelectorAll<HTMLElement>('[data-v11-reveal]');
    if (!items.length) return;

    const tween = gsap.fromTo(items, {
      autoAlpha: 0,
      y: 18,
    }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.48,
      stagger: 0.08,
      ease: 'power2.out',
      paused: true,
      immediateRender: false,
    });

    triggers.push(ScrollTrigger.create({
      trigger: section,
      start: 'top 82%',
      once: true,
      onEnter: () => tween.play(),
    }));
  });

  return () => triggers.forEach((trigger) => trigger.kill());
};

export const initV11ComparisonReveal = (root: ParentNode = document): V11AnimationCleanup =>
  initV11SequentialReveal('[data-v11-comparison]', root);

export const initV11TransformationCards = (root: ParentNode = document): V11AnimationCleanup => {
  if (prefersReducedMotion()) return () => undefined;

  const contexts = Array.from(root.querySelectorAll<HTMLElement>('[data-v11-transform-card]')).map((card) => {
    const after = card.querySelector<HTMLElement>('[data-v11-transform-after]');
    const tag = card.querySelector<HTMLElement>('[data-v11-transform-tag]');
    if (!after) return undefined;

    const enter = () => {
      gsap.to(after, { clipPath: 'inset(0 0% 0 0)', duration: 0.45, ease: 'power2.out' });
      if (tag) tag.textContent = 'À valider';
    };
    const leave = () => {
      gsap.to(after, { clipPath: 'inset(0 100% 0 0)', duration: 0.38, ease: 'power2.inOut' });
      if (tag) tag.textContent = 'IA prépare';
    };

    gsap.set(after, { clipPath: 'inset(0 100% 0 0)' });
    card.addEventListener('mouseenter', enter);
    card.addEventListener('mouseleave', leave);

    return () => {
      card.removeEventListener('mouseenter', enter);
      card.removeEventListener('mouseleave', leave);
    };
  }).filter((cleanup): cleanup is V11AnimationCleanup => Boolean(cleanup));

  return () => contexts.forEach((cleanup) => cleanup());
};

export const initV11Motion = (root: ParentNode = document): V11AnimationCleanup => {
  const cleanups = [
    initV11ProofMetricsCountUp(root),
    initV11SequentialReveal('[data-v11-growth-loop]', root),
    initV11SequentialReveal('[data-v11-network-hub]', root),
    initV11ComparisonReveal(root),
    initV11TransformationCards(root),
  ];

  return () => cleanups.forEach((cleanup) => cleanup());
};
