

/** @type {import("tailwindcss").Config} */
import plugin from 'tailwindcss/plugin';

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  });
});

module.exports = {
  content: [
    './pages/*/.{js,ts,jsx,tsx,mdx}',
    './components/*/.{js,ts,jsx,tsx,mdx}',
    './app/*/.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { max: '1440px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '380px' },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'heroSection-background':
          'url(https://farktorcdn.com/Library/SystemBox/img/dIx3COn00UC8.png)',
        'footer-texture':
          'url(https://farktorcdn.com/Library/SystemBox/img/ko1RIutHHcjE.png)',
        'mFooter-texture':
          'url(https://farktorcdn.com/Library/SystemBox/img/tYpb6FE664S5.png)',
        'tabContent-linear-background':
          'linear-gradient(270deg, rgba(0,29,172,1) 56%, rgba(0,15,87,1) 91%)',
        dualBackgroundLg:
          'linear-gradient(to bottom, #001DAC 510px, #f6f9fe 510px)',
        dualBackgroundSm:
          'linear-gradient(to bottom, #001DAC 412px, #f6f9fe 412px)',
        dualfBackgroundXs:
          'linear-gradient(to bottom, #001DAC 340px, #f6f9fe 340px)',
      },
      colors: {
        bg_blue: '#001B9E',
        bg_light: '#F6F9FE',
        tabBtn_color: '#1C40F2',
        title_color: '#092D9B',
        text_color: '#181A46',
        farktorWhite: '#FFFFFF',
        farktorYellow: '#FFB800',
        tabTextColorWhite: '#E8E8E8',
      },
      fontSize: {
        heroTitle: '75px',
        customTitle: '35px',
        customL: '20px',
        customMd: '16px',
        customSm: '15px',
        customXsm: '14px',
      },
      keyframes: {
        //HIGHLIGHT PROPERTİES START
        swing: {
          '0%,100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(-52%)' },
        },
        swingReverse: {
          '0%,100%': { transform: 'translateY(-50%) translateX(-50%)' },
          '50%': { transform: 'translateY(-48%) translateX(-50%)' },
        },
        swingRocket: {
          '0%,100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-16%)' },
        },
        scaleAnimate: {
          '0%,100%': { transform: 'scale(1) ' },
          '50%': { transform: 'scale(1.075) ' },
        },
        dotAnimate: {
          '0%,60%,100%': { transform: 'translateY(0px)' },
          '30%': { transform: 'translateY(-8px) ' },
        },

        rotateAnimateGear: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-180deg) ' },
        },
        rotateAnimateGearRight: {
          '0%': { transform: 'rotate(30deg)' },
          '100%': { transform: 'rotate(210deg) ' },
        },
        //HIGHLIGHT PROPERTİES END
        bounceAnimate: {
          '0%,100%': {
            transform: 'scale(0.5)',
          },
          '50%': { transform: 'scale(1.2)' },
        },
        arrowUpAnimate: {
          '0%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
          '25%': { opacity: '0', transform: 'translateY(-10px) scale(0.9)' },
          '26%': { opacity: '0', transform: 'translateY(10px) scale(0.9)' },
          '55%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
        },
      },
      animation: {
        //HIGHLIGHT PROPERTİES START
        swing: 'swing ease-in-out 1.5s infinite ',
        swingReverse: 'swingReverse ease-in-out 1.5s infinite',
        swingRocket: 'swingRocket ease-in-out 1.5s infinite ',
        scaleAnimate: 'scaleAnimate ease-in-out 1.5s infinite ',
        dotAnimate: 'dotAnimate 1.3s linear infinite',
        rotateAnimateGear: 'rotateAnimateGear linear 2.5s infinite',
        rotateAnimateGearRight: 'rotateAnimateGearRight linear 2.5s infinite',
        //HIGHLIGHT PROPERTİES END
        bounceAnimate: 'bounceAnimate 0.8s ease-in-out infinite',
        arrowUpAnimate: 'arrowUpAnimate 1.4s linear infinite',
      },
    },
  },
  plugins: [rotateX],
};