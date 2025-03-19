// tailwind.config.js
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        brandDark: '#3E362E',
        brandPrimary: '#865D36',
        brandSecondary: '#93785B',
        brandAccent: '#AC8968',
        brandLight: '#A69080',
        brandAccentLight: '#c4ac95'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards'
      }
    }
  }
};
