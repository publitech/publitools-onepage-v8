import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type HomepageV12Cleanup = () => void;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const register = () => { if (!(gsap.core as any).globals().ScrollTrigger) gsap.registerPlugin(ScrollTrigger); };

export const initHomepageV12Motion = (root: ParentNode = document): HomepageV12Cleanup => {
  const page = root.querySelector<HTMLElement>('.homepage-v12');
  if (!page || reduced()) return () => undefined;
  register();
  const triggers: ScrollTrigger[] = [];
  const loops: gsap.core.Tween[] = [];

  const hero = page.querySelector<HTMLElement>('[data-v12-hero-stage]');
  if (hero) {
    loops.push(gsap.fromTo(hero, { y: 10, scale: 0.992 }, { y: -8, scale: 1, duration: 5.5, repeat: -1, yoyo: true, ease: 'sine.inOut' }));
    loops.push(gsap.fromTo(hero.querySelectorAll<HTMLElement>('.v12-logo-pill'), { autoAlpha: 0.68, y: 4 }, { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.4, repeat: -1, repeatDelay: 4.5, ease: 'power2.out' }));
  }

  // Visual-first: keep all product images visible without JS; animate only destination pulse.
  page.querySelectorAll<HTMLElement>('.v12-destination-band span').forEach((el) => {
    const tween = gsap.fromTo(el, { y: 8 }, { y: 0, duration: 0.35, ease: 'power2.out', paused: true, immediateRender: false });
    triggers.push(ScrollTrigger.create({ trigger: el, start: 'top 86%', once: true, onEnter: () => tween.play() }));
  });

  const destinations = page.querySelectorAll<HTMLElement>('[data-v12-destination]');
  const band = page.querySelector<HTMLElement>('.v12-destination-band');
  if (band && destinations.length) {
    const pulse = gsap.to(destinations, { boxShadow: '0 14px 30px rgba(31,169,113,0.18)', scale: 1.02, stagger: 0.08, duration: 0.35, paused: true, ease: 'power2.out' });
    triggers.push(ScrollTrigger.create({ trigger: band, start: 'top 78%', once: true, onEnter: () => pulse.play() }));
  }

  return () => { triggers.forEach((t) => t.kill()); loops.forEach((l) => l.kill()); };
};
