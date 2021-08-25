import { getLink } from '../../utils/getLink.js';
import { theme } from '../../index.js';

class HeaderNavbar extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.styles());
    const header = this.createHeader();
    const navbar = this.createNavbar();
    const menu = this.createMenu();

    header.appendChild(menu);
    header.appendChild(navbar);
    shadow.appendChild(header);

    const neo = shadow.querySelector('#x');

    neo.addEventListener('click', event => {
      event.preventDefault();
      theme.cycleTheme();
      this.dispatchEvent(
        new CustomEvent('render', {
          detail: {
            theme: theme.theme
          }
        })
      );
    });
  }

  redirect(route) {
    return getLink(route);
  }

  createHeader() {
    const header = document.createElement('header');

    return header;
  }

  createMenu() {
    const menu = document.createElement('div');

    menu.id = 'menu';

    menu.innerHTML = `
      <div id="hamburger">
        <menu>
          <input type="checkbox" name="menu">
          <span></span>
          <span></span>
          <span></span>
          <ul id="sidebar">
            <li>
              <!-- Info -->
                <a href=${this.redirect('/Info')}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 35.9375H6.25C5.4212 35.9375 4.62634 35.6083 4.04029 35.0222C3.45424 34.4362 3.125 33.6413 3.125 32.8125V18.75C3.125 17.9212 3.45424 17.1263 4.04029 16.5403C4.62634 15.9542 5.4212 15.625 6.25 15.625H21.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.875 42.1875H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.625 14.0625H34.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.625 20.3125H34.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.3125 7.8125H29.6875C28.8246 7.8125 28.125 8.51206 28.125 9.375V40.625C28.125 41.4879 28.8246 42.1875 29.6875 42.1875H45.3125C46.1754 42.1875 46.875 41.4879 46.875 40.625V9.375C46.875 8.51206 46.1754 7.8125 45.3125 7.8125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1875 35.9375V42.1875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  Informática
                </a>
            </li>
            <li>
              <!-- Platforms -->
                <a href=${this.redirect('/Platforms')}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.6875 21.0938H35.9375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.0625 21.0938H20.3125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1875 17.9688V24.2188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.5973 10.8867L16.4071 10.9375C14.0193 10.9377 11.7078 11.779 9.87845 13.3137C8.0491 14.8484 6.8188 16.9784 6.40351 19.3299L6.40518 19.3302L3.209 35.7682C3.00712 36.9136 3.17564 38.0935 3.69007 39.1366C4.2045 40.1797 5.03806 41.0317 6.06968 41.5687C7.1013 42.1057 8.27727 42.2999 9.42679 42.1231C10.5763 41.9462 11.6395 41.4075 12.462 40.5852L12.4617 40.5849L20.9061 31.25L33.5973 31.1992C36.2909 31.1992 38.8742 30.1292 40.7789 28.2245C42.6836 26.3199 43.7536 23.7366 43.7536 21.043C43.7536 18.3494 42.6836 15.7661 40.7789 13.8614C38.8742 11.9567 36.2909 10.8867 33.5973 10.8867V10.8867Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.5993 19.2793L46.7928 35.7682C46.9947 36.9136 46.8262 38.0935 46.3118 39.1366C45.7973 40.1797 44.9638 41.0316 43.9322 41.5687C42.9005 42.1057 41.7246 42.2999 40.575 42.123C39.4255 41.9462 38.3623 41.4075 37.5398 40.5851L37.5402 40.5848L29.1016 31.2172" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    Plataformas
                </a>
            </li>
            <li>
              <!-- Support -->
                <a href=${this.redirect('/Support')}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 31.25C29.3147 31.25 32.8125 27.7522 32.8125 23.4375C32.8125 19.1228 29.3147 15.625 25 15.625C20.6853 15.625 17.1875 19.1228 17.1875 23.4375C17.1875 27.7522 20.6853 31.25 25 31.25Z" stroke="white" stroke-width="2" stroke-miterlimit="10"></path><path d="M12.4607 38.9402C13.6377 36.6262 15.432 34.683 17.6451 33.3257C19.8582 31.9684 22.4038 31.25 24.9999 31.25C27.5961 31.25 30.1416 31.9684 32.3547 33.3257C34.5678 34.6829 36.3622 36.6262 37.5392 38.9402" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34.375 10.9375H43.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.0625 6.25V15.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.518 22.0426C44.1387 25.9499 43.5062 29.9534 41.7112 33.4791C39.9163 37.0049 37.0511 39.8717 33.5264 41.6686C30.0016 43.4655 25.9985 44.1003 22.0908 43.4818C18.1831 42.8633 14.5716 41.0234 11.774 38.2259C8.9765 35.4283 7.1366 31.8168 6.51814 27.9091C5.89968 24.0014 6.53441 19.9983 8.33134 16.4736C10.1283 12.9489 12.9951 10.0836 16.5208 8.2887C20.0466 6.49376 24.0501 5.86129 27.9574 6.48195" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    Suporte
                </a>
            </li>
            <li>
              <!-- About Us -->
                <a href=${this.redirect('/about')}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1875 31.25C22.7966 31.25 27.3438 26.7029 27.3438 21.0938C27.3438 15.4846 22.7966 10.9375 17.1875 10.9375C11.5784 10.9375 7.03125 15.4846 7.03125 21.0938C7.03125 26.7029 11.5784 31.25 17.1875 31.25Z" stroke="white" stroke-width="2" stroke-miterlimit="10"></path><path d="M30.354 11.3158C31.7509 10.9222 33.216 10.8326 34.6504 11.0529C36.0849 11.2732 37.4555 11.7983 38.67 12.5929C39.8844 13.3876 40.9145 14.4332 41.6908 15.6594C42.4671 16.8856 42.9716 18.264 43.1703 19.7016C43.3691 21.1393 43.2574 22.6028 42.8429 23.9936C42.4284 25.3845 41.7207 26.6704 40.7674 27.7646C39.8141 28.8589 38.6373 29.7362 37.3164 30.3375C35.9955 30.9387 34.5611 31.2498 33.1098 31.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.12427 38.554C4.71047 36.2978 6.81624 34.4563 9.26382 33.1851C11.7114 31.9138 14.4289 31.2501 17.1869 31.25C19.945 31.2499 22.6625 31.9134 25.1102 33.1844C27.5579 34.4555 29.6638 36.2968 31.2502 38.553" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1099 31.25C35.8681 31.248 38.5863 31.9107 41.0342 33.1819C43.482 34.4531 45.5875 36.2955 47.1724 38.553" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    Quem Somos
                </a>
            </li>
          </ul>
        </menu>
      </div>
      <div id="social">
        <a href="#facebook">
          <svg id="facebook" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 43.75C35.3553 43.75 43.75 35.3553 43.75 25C43.75 14.6447 35.3553 6.25 25 6.25C14.6447 6.25 6.25 14.6447 6.25 25C6.25 35.3553 14.6447 43.75 25 43.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.8125 17.1877H29.6875C28.4443 17.1877 27.252 17.6816 26.3729 18.5607C25.4939 19.4398 25 20.632 25 21.8752V43.7502" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.75 28.1252H31.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>

        <a href="#instagram">
          <svg id="gradient" width="0" height="0">
            <radialGradient id="rgb" r="150%" cx="30%" cy="107%">
              <stop stop-color="#fdf497" offset="0"></stop>
              <stop stop-color="#fdf497" offset="0.05"></stop>
              <stop stop-color="#fd5949" offset="0.45"></stop>
              <stop stop-color="#d6249f" offset="0.6"></stop>
              <stop stop-color="#285AEB" offset="0.9"></stop>
            </radialGradient>
          </svg>
          <svg id="instagram" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 32.8125C29.3147 32.8125 32.8125 29.3147 32.8125 25C32.8125 20.6853 29.3147 17.1875 25 17.1875C20.6853 17.1875 17.1875 20.6853 17.1875 25C17.1875 29.3147 20.6853 32.8125 25 32.8125Z" stroke="white" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.5938 7.03125H16.4062C11.2286 7.03125 7.03125 11.2286 7.03125 16.4062V33.5938C7.03125 38.7714 11.2286 42.9688 16.4062 42.9688H33.5938C38.7714 42.9688 42.9688 38.7714 42.9688 33.5938V16.4062C42.9688 11.2286 38.7714 7.03125 33.5938 7.03125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>

        <a href="#twitter">
          <svg id="twitter" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.37502 39.0625C9.37502 39.0625 17.1875 37.5 18.75 32.8125C18.75 32.8125 6.25002 28.125 9.37502 10.9375C9.37502 10.9375 15.625 18.75 25 20.3125V17.1881C25.0002 15.3931 25.6184 13.6529 26.7506 12.26C27.8829 10.8672 29.4602 9.90661 31.2173 9.53985C32.9744 9.17309 34.8043 9.42249 36.3991 10.2461C37.994 11.0697 39.2567 12.4174 39.9749 14.0624L46.875 14.0625L40.625 20.3125C40.625 31.25 32.8125 42.1875 18.75 42.1875C12.5 42.1875 9.37502 39.0625 9.37502 39.0625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
      </div>

      <div id="logo">
        <a href=${this.redirect('/')} aria-label="NeoLogo">
          <svg width="307" height="94" viewBox="0 0 307 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="x" class="toggle" d="M81.1674 71.6726L87.386 64.9473C88.1833 64.0851 88.1833 62.6742 87.386 61.812L81.5878 55.5413C80.7905 54.6791 79.4859 54.6791 78.6886 55.5413L72.47 62.2666C72.2815 62.4704 72.1656 62.7526 72.1801 63.0505L72.1801 70.8888C72.1801 71.5159 72.6294 72.0018 73.2093 72.0018L80.4571 72.0018C80.718 72.0018 80.9645 71.8921 81.1674 71.6726V71.6726ZM67.5124 62.2666L61.2938 55.5413C60.4965 54.6791 59.1919 54.6791 58.3947 55.5413L52.5964 61.812C51.7991 62.6742 51.7991 64.0851 52.5964 64.9473L58.815 71.6726C59.0035 71.8764 59.2644 72.0018 59.5398 71.9862L66.7877 71.9862C67.3675 71.9862 67.8169 71.5002 67.8169 70.8731L67.8169 63.0348C67.8169 62.7526 67.7154 62.4861 67.5124 62.2666ZM58.815 77.034L52.5964 83.7593C51.7991 84.6215 51.7991 86.0324 52.5964 86.8947L58.3947 93.1653C59.1919 94.0275 60.4965 94.0275 61.2938 93.1653L67.5124 86.44C67.7009 86.2362 67.8169 85.9541 67.8024 85.6562L67.8024 77.8179C67.8024 77.1908 67.353 76.7048 66.7732 76.7048L59.5253 76.7048C59.2644 76.7048 59.018 76.8146 58.815 77.034ZM80.4281 76.7048H73.1803C72.6004 76.7048 72.1511 77.1908 72.1511 77.8179L72.1511 85.6562C72.1511 85.9384 72.2525 86.2362 72.441 86.44L78.6741 93.181C79.4714 94.0432 80.776 94.0432 81.5733 93.181L87.3716 86.9103C88.1688 86.0481 88.1688 84.6372 87.3716 83.775L81.1529 77.0497C80.9645 76.8146 80.718 76.7048 80.4281 76.7048V76.7048Z" fill="#8B46A3"></path><path d="M47 83.76V90H20.984V56.4H46.376V62.64H28.712V69.936H44.312V75.984H28.712V83.76H47ZM108.512 56.4C111.488 56.4 114.064 56.896 116.24 57.888C118.448 58.88 120.144 60.288 121.328 62.112C122.512 63.936 123.104 66.096 123.104 68.592C123.104 71.056 122.512 73.216 121.328 75.072C120.144 76.896 118.448 78.304 116.24 79.296C114.064 80.256 111.488 80.736 108.512 80.736H101.744V90H93.9684V56.4H108.512ZM108.08 74.4C110.416 74.4 112.192 73.904 113.408 72.912C114.624 71.888 115.232 70.448 115.232 68.592C115.232 66.704 114.624 65.264 113.408 64.272C112.192 63.248 110.416 62.736 108.08 62.736H101.744V74.4H108.08ZM154.672 83.76V90H128.656V56.4H154.048V62.64H136.384V69.936H151.984V75.984H136.384V83.76H154.672ZM191.675 56.4V90H185.291L168.539 69.6V90H160.859V56.4H167.291L183.995 76.8V56.4H191.675ZM210.665 90.576C208.009 90.576 205.433 90.224 202.937 89.52C200.473 88.784 198.489 87.84 196.985 86.688L199.625 80.832C201.065 81.888 202.777 82.736 204.761 83.376C206.745 84.016 208.729 84.336 210.713 84.336C212.921 84.336 214.553 84.016 215.609 83.376C216.665 82.704 217.193 81.824 217.193 80.736C217.193 79.936 216.873 79.28 216.233 78.768C215.625 78.224 214.825 77.792 213.833 77.472C212.873 77.152 211.561 76.8 209.897 76.416C207.337 75.808 205.241 75.2 203.609 74.592C201.977 73.984 200.569 73.008 199.385 71.664C198.233 70.32 197.657 68.528 197.657 66.288C197.657 64.336 198.185 62.576 199.241 61.008C200.297 59.408 201.881 58.144 203.993 57.216C206.137 56.288 208.745 55.824 211.817 55.824C213.961 55.824 216.057 56.08 218.105 56.592C220.153 57.104 221.945 57.84 223.481 58.8L221.081 64.704C217.977 62.944 214.873 62.064 211.769 62.064C209.593 62.064 207.977 62.416 206.921 63.12C205.897 63.824 205.385 64.752 205.385 65.904C205.385 67.056 205.977 67.92 207.161 68.496C208.377 69.04 210.217 69.584 212.681 70.128C215.241 70.736 217.337 71.344 218.969 71.952C220.601 72.56 221.993 73.52 223.145 74.832C224.329 76.144 224.921 77.92 224.921 80.16C224.921 82.08 224.377 83.84 223.289 85.44C222.233 87.008 220.633 88.256 218.489 89.184C216.345 90.112 213.737 90.576 210.665 90.576ZM230.234 56.4H238.01V90H230.234V56.4ZM278.101 56.4L263.557 90H255.877L241.38 56.4H249.781L260.005 80.4L270.373 56.4H278.101ZM306.922 83.76V90H280.906V56.4H306.298V62.64H288.634V69.936H304.234V75.984H288.634V83.76H306.922Z" fill="white"></path><path d="M38.955 49.105L3.4 9.065L3.465 48H0.345V0.874998H0.54L36.095 41.24L36.03 1.85H39.085V49.105H38.955ZM53.7923 1.85H82.2623V4.905H56.9773V23.235H79.7273V26.29H56.9773V44.945H83.1723V48H53.7923V1.85ZM92.3809 24.99C92.3809 21.74 92.9876 18.7067 94.2009 15.89C95.4143 13.03 97.1043 10.5167 99.2709 8.35C101.438 6.14 103.929 4.42833 106.746 3.215C109.606 1.95833 112.661 1.33 115.911 1.33C119.161 1.33 122.216 1.95833 125.076 3.215C127.936 4.42833 130.449 6.14 132.616 8.35C134.783 10.5167 136.473 13.03 137.686 15.89C138.943 18.7067 139.571 21.74 139.571 24.99C139.571 28.24 138.943 31.295 137.686 34.155C136.473 36.9717 134.783 39.4633 132.616 41.63C130.449 43.7967 127.936 45.4867 125.076 46.7C122.216 47.9133 119.161 48.52 115.911 48.52C112.661 48.52 109.606 47.935 106.746 46.765C103.929 45.595 101.438 43.9483 99.2709 41.825C97.1043 39.7017 95.4143 37.21 94.2009 34.35C92.9876 31.49 92.3809 28.37 92.3809 24.99ZM95.6309 25.055C95.6309 27.8717 96.1509 30.515 97.1909 32.985C98.2309 35.455 99.6826 37.6217 101.546 39.485C103.409 41.3483 105.554 42.8217 107.981 43.905C110.451 44.945 113.073 45.465 115.846 45.465C118.706 45.465 121.371 44.945 123.841 43.905C126.311 42.8217 128.478 41.3483 130.341 39.485C132.204 37.6217 133.656 35.455 134.696 32.985C135.779 30.515 136.321 27.85 136.321 24.99C136.321 22.1733 135.779 19.53 134.696 17.06C133.656 14.5467 132.204 12.3583 130.341 10.495C128.478 8.58833 126.311 7.09333 123.841 6.01C121.371 4.92667 118.728 4.385 115.911 4.385C113.051 4.385 110.386 4.94833 107.916 6.075C105.446 7.15833 103.279 8.65333 101.416 10.56C99.5959 12.4667 98.1659 14.6767 97.1259 17.19C96.1293 19.66 95.6309 22.2817 95.6309 25.055Z" fill="white"></path></svg>
        </a>
      </div>

      <div id="user-interactions">
        <a href="#search">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6562 39.0625C31.7172 39.0625 39.0625 31.7172 39.0625 22.6562C39.0625 13.5953 31.7172 6.25 22.6562 6.25C13.5953 6.25 6.25 13.5953 6.25 22.6562C6.25 31.7172 13.5953 39.0625 22.6562 39.0625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34.2566 34.2579L43.7489 43.7502" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
        
        <a href="#user">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 31.25C31.9036 31.25 37.5 25.6536 37.5 18.75C37.5 11.8464 31.9036 6.25 25 6.25C18.0964 6.25 12.5 11.8464 12.5 18.75C12.5 25.6536 18.0964 31.25 25 31.25Z" stroke="white" stroke-width="2" stroke-miterlimit="10"></path><path d="M6.05249 42.1857C7.97351 38.8606 10.7357 36.0996 14.0616 34.18C17.3876 32.2605 21.1601 31.25 25.0002 31.25C28.8403 31.25 32.6128 32.2606 35.9386 34.1803C39.2645 36.0999 42.0267 38.8609 43.9476 42.1861" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
        
        <a href="#cart">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.9375 35.9375H13.6364L8.18782 5.97049C8.12236 5.61047 7.93262 5.28485 7.65169 5.05039C7.37075 4.81593 7.01644 4.6875 6.65052 4.6875H3.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.625 43.75C17.7824 43.75 19.5312 42.0011 19.5312 39.8438C19.5312 37.6864 17.7824 35.9375 15.625 35.9375C13.4676 35.9375 11.7188 37.6864 11.7188 39.8438C11.7188 42.0011 13.4676 43.75 15.625 43.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M35.9375 43.75C38.0949 43.75 39.8438 42.0011 39.8438 39.8438C39.8438 37.6864 38.0949 35.9375 35.9375 35.9375C33.7801 35.9375 32.0312 37.6864 32.0312 39.8438C32.0312 42.0011 33.7801 43.75 35.9375 43.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.2159 28.125H36.7385C37.4704 28.125 38.179 27.8681 38.7409 27.3992C39.3027 26.9303 39.6822 26.2791 39.8131 25.559L42.1875 12.5H9.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
      </div>
    `;

    return menu;
  }

  createNavbar() {
    const navbar = document.createElement('nav');

    navbar.innerHTML = `
      <ul id="nav__list">
        <li class="nav__listitem">
          <a href=${this.redirect('/Info')}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 35.9375H6.25C5.4212 35.9375 4.62634 35.6083 4.04029 35.0222C3.45424 34.4362 3.125 33.6413 3.125 32.8125V18.75C3.125 17.9212 3.45424 17.1263 4.04029 16.5403C4.62634 15.9542 5.4212 15.625 6.25 15.625H21.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.875 42.1875H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.625 14.0625H34.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.625 20.3125H34.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.3125 7.8125H29.6875C28.8246 7.8125 28.125 8.51206 28.125 9.375V40.625C28.125 41.4879 28.8246 42.1875 29.6875 42.1875H45.3125C46.1754 42.1875 46.875 41.4879 46.875 40.625V9.375C46.875 8.51206 46.1754 7.8125 45.3125 7.8125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1875 35.9375V42.1875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            Informática
          </a>
          
          <!-- Itemdrop starts, ul & li is created inside an existing li to create hierarchy that later on creates a dropdown logic -->
          <ul class="nav__itemdrop">
            <li>
              <a href="#">Peças(Hardware)</a>
              <ul class="nav__itemdrop2">
                <li><a href="#">Processadores</a></li>
                <li><a href="#">Placas De Vídeo</a></li>
                <li><a href="#">Placas mãe</a></li>
                <li><a href="#">Memórias</a></li>
                <li><a href="#">Disco rígido hd/ssd</a></li>
                <li><a href="#">fontes</a></li>
              </ul>
            </li>
            
            <li>
              <a href="#">Periféricos e Acessórios</a>
              <ul class="nav__itemdrop2">
                <li><a href="#">Fones de Ouvido</a></li>
                <li><a href="#">Teclados</a></li>
                <li><a href="#">Mouses</a></li>
                <li><a href="#">Controles</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Computadores Montados</a>
            </li>
          </ul>
        </li>
        
        <!-- Platforms -->
        <li class="nav__listitem">
          <a href=${this.redirect('/Platforms')}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.6875 21.0938H35.9375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.0625 21.0938H20.3125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1875 17.9688V24.2188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.5973 10.8867L16.4071 10.9375C14.0193 10.9377 11.7078 11.779 9.87845 13.3137C8.0491 14.8484 6.8188 16.9784 6.40351 19.3299L6.40518 19.3302L3.209 35.7682C3.00712 36.9136 3.17564 38.0935 3.69007 39.1366C4.2045 40.1797 5.03806 41.0317 6.06968 41.5687C7.1013 42.1057 8.27727 42.2999 9.42679 42.1231C10.5763 41.9462 11.6395 41.4075 12.462 40.5852L12.4617 40.5849L20.9061 31.25L33.5973 31.1992C36.2909 31.1992 38.8742 30.1292 40.7789 28.2245C42.6836 26.3199 43.7536 23.7366 43.7536 21.043C43.7536 18.3494 42.6836 15.7661 40.7789 13.8614C38.8742 11.9567 36.2909 10.8867 33.5973 10.8867V10.8867Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.5993 19.2793L46.7928 35.7682C46.9947 36.9136 46.8262 38.0935 46.3118 39.1366C45.7973 40.1797 44.9638 41.0316 43.9322 41.5687C42.9005 42.1057 41.7246 42.2999 40.575 42.123C39.4255 41.9462 38.3623 41.4075 37.5398 40.5851L37.5402 40.5848L29.1016 31.2172" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            Plataformas
          </a>
          
          <!-- Itemdrop starts, ul & li is created inside an existing li to create hierarchy that later on creates a dropdown logic -->
          <ul class="nav__itemdrop">
            <li>
              <a href="#">Xbox</a>
              <ul class="nav__itemdrop2">
                <li>
                  <a href="#">Consoles</a>
                  <ul class="nav__itemdrop3">
                    <li><a href="#">Xbox One</a></li>
                    <li><a href="#">Xbox Series S</a></li>
                    <li><a href="#">Xbox Series X</a></li>
                  </ul>
                </li>
                <li><a href="#">Acessórios</a></li>
                <li><a href="#">Jogos</a></li>
              </ul>
              
            </li>
            
            <li>
              <a href="#">Playstation</a>
              <ul class="nav__itemdrop2">
                <li>
                  <a href="#">Consoles</a>
                  <ul class="nav__itemdrop3">
                    <li><a href="#">Playstation 4</a></li>
                    <li><a href="#">Playstation 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Acessórios</a></li>
                <li><a href="#">Jogos</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Nintendo</a>
              <ul class="nav__itemdrop2">
                <li>
                  <a href="#">Consoles</a>
                  <ul class="nav__itemdrop3">
                    <li><a href="#">Switch</a></li>
                  </ul>
                </li>
                <li><a href="#">Acessórios</a></li>
                <li><a href="#">Jogos</a></li>
              </ul>
            </li>
          </ul>
        </li>
        
        <!-- Support -->
        <li class="nav__listitem">
          <a href="${this.redirect('/Support')}">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 31.25C29.3147 31.25 32.8125 27.7522 32.8125 23.4375C32.8125 19.1228 29.3147 15.625 25 15.625C20.6853 15.625 17.1875 19.1228 17.1875 23.4375C17.1875 27.7522 20.6853 31.25 25 31.25Z" stroke="white" stroke-width="2" stroke-miterlimit="10"></path><path d="M12.4607 38.9402C13.6377 36.6262 15.432 34.683 17.6451 33.3257C19.8582 31.9684 22.4038 31.25 24.9999 31.25C27.5961 31.25 30.1416 31.9684 32.3547 33.3257C34.5678 34.6829 36.3622 36.6262 37.5392 38.9402" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34.375 10.9375H43.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.0625 6.25V15.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.518 22.0426C44.1387 25.9499 43.5062 29.9534 41.7112 33.4791C39.9163 37.0049 37.0511 39.8717 33.5264 41.6686C30.0016 43.4655 25.9985 44.1003 22.0908 43.4818C18.1831 42.8633 14.5716 41.0234 11.774 38.2259C8.9765 35.4283 7.1366 31.8168 6.51814 27.9091C5.89968 24.0014 6.53441 19.9983 8.33134 16.4736C10.1283 12.9489 12.9951 10.0836 16.5208 8.2887C20.0466 6.49376 24.0501 5.86129 27.9574 6.48195" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            Suporte
          </a>
        </li>
        
        <!-- About Us -->
        <li class="nav__listitem">
          <a href=${this.redirect('/about')}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1875 31.25C22.7966 31.25 27.3438 26.7029 27.3438 21.0938C27.3438 15.4846 22.7966 10.9375 17.1875 10.9375C11.5784 10.9375 7.03125 15.4846 7.03125 21.0938C7.03125 26.7029 11.5784 31.25 17.1875 31.25Z" stroke="white" stroke-width="2" stroke-miterlimit="10"></path><path d="M30.354 11.3158C31.7509 10.9222 33.216 10.8326 34.6504 11.0529C36.0849 11.2732 37.4555 11.7983 38.67 12.5929C39.8844 13.3876 40.9145 14.4332 41.6908 15.6594C42.4671 16.8856 42.9716 18.264 43.1703 19.7016C43.3691 21.1393 43.2574 22.6028 42.8429 23.9936C42.4284 25.3845 41.7207 26.6704 40.7674 27.7646C39.8141 28.8589 38.6373 29.7362 37.3164 30.3375C35.9955 30.9387 34.5611 31.2498 33.1098 31.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.12427 38.554C4.71047 36.2978 6.81624 34.4563 9.26382 33.1851C11.7114 31.9138 14.4289 31.2501 17.1869 31.25C19.945 31.2499 22.6625 31.9134 25.1102 33.1844C27.5579 34.4555 29.6638 36.2968 31.2502 38.553" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1099 31.25C35.8681 31.248 38.5863 31.9107 41.0342 33.1819C43.482 34.4531 45.5875 36.2955 47.1724 38.553" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            Quem Somos
          </a>
        </li>
      </ul>
    `;

    return navbar;
  }

  styles() {
    const style = document.createElement('style');

    style.textContent = `
      ul {
        list-style-type: none;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      a {
        outline: 0;
        text-decoration: none;
      }

      header {
        z-index: 1;
        width: 100%;
      }

      #menu {
        width: 100%;
        background: #000;

        display: flex;
        justify-content: space-around;
        padding: 0.6rem;
      }

      div#menu div#hamburger {
        display: none;
        position: relative;
      }

      #menu #hamburger {
        z-index: 1;
        user-select: none;
      }

      #menu #hamburger menu {
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        cursor: pointer;
        position: relative;
      
        padding: 0.6rem;
      }

      #menu #hamburger input {
        display: block;
        width: 5rem;
        height: 5rem;
        position: absolute;
        cursor: pointer;
        opacity: 0;
        align-self: center;
        z-index: 2;
      }

      #menu #hamburger span {
        display: block;
        width: 3rem;
        height: 4px;
        position: relative;
        
        background: #cdcdcd;
        border-radius: 1rem;
        
        z-index: 1;
      
        transform-origin: 4px 0px;
        
        transition: var(--transition);
      }
      
      #menu #hamburger span:nth-child(3) {
        margin: 0.5rem 0;
      }
      
      #menu #hamburger menu:hover span:nth-child(2) {
        width: 2.2rem
      }
      
      #menu #hamburger menu:hover span:nth-child(4) {
        transition: var(--transition);
      }
      
      #menu #hamburger menu:hover span:nth-child(4) {
        width: 1.6rem;
      }

      
      #menu #hamburger input:checked ~ span:nth-child(2) {
        transform: translate(0, 4px);
      }

      #menu #hamburger input:checked ~ span:nth-child(3) {
        margin: 0;
      }
      
      #menu #hamburger input:checked ~ span:nth-child(4) {
        transform: translate(0, -4px);
      }

      #menu #hamburger menu ul {
        transform: translate(-300%, 60%);
        transition: var(--transition);
        position: absolute;
        background: var(--header-bg);
        border-top: 5px solid var(--accent);
        border-bottom: 5px solid var(--accent);
      }
      
      #menu #hamburger menu ul li {
        padding: 1rem 2rem;
      }

      #menu #hamburger menu ul li:hover a,
      #menu #hamburger menu ul li:hover svg path {
        color: var(--accent);
        stroke: var(--accent);
      }
      
      #menu #hamburger menu ul li a {
        color: var(--link);
        display: flex;
        align-items: center;
        justify-content: start;
        transition: var(--transition);
      }

      #menu #hamburger menu input:checked ~ ul {
        transform: translate(0%, 60%);
      }

      #menu div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      #menu a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      svg {
        width: 3.125rem;
        height: 3.125rem;
      }
      
      #menu svg#gradient {
        position: absolute;
      }

      #menu #logo svg {
        width: 18rem;
        height: 6rem;
      }

      #menu #logo a:hover svg path#x,
      #menu #logo a:focus svg path#x {
        fill: unset;
        animation: rgb 4s infinite;
      }
      
      #menu div:not(#logo) a:focus svg path,
      #menu div:not(#logo) a:hover svg path {
        transition: var(--transition);
        stroke: var(--accent);
      }
      
      #menu div a:focus svg#instagram path,
      #menu div a:hover svg#instagram path {
        transition: var(--transition);
        stroke: url('#rgb');
      }
      
      #menu div a:focus svg#facebook path,
      #menu div a:hover svg#facebook path {
        transition: var(--transition);
        stroke: #4267b2;
      }
      
      #menu div a:focus svg#twitter path,
      #menu div a:hover svg#twitter path {
        transition: var(--transition);
        stroke: #1da1f2;
      }

      nav {
        position: sticky;
        background: var(--nav-bg);

        border-bottom: 5px solid var(--accent);
      }

      nav a {
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        color: var(--link);
        text-transform: uppercase;
        transition: var(--transition);
      }

      svg path {
        transition: var(--transition);
      }
      
      nav a:hover,
      nav a:hover svg path,
      nav a:focus,
      nav a:focus svg path {
        stroke: var(--accent);
        transition: var(--transition);
        color: var(--accent);
        cursor: pointer;
      }

      nav #nav__list {
        display: flex;
        list-style-type: none;
        justify-content: space-evenly;
      }

      nav #nav__list ul {
        width: 100%;
      }

      nav #nav__list li {
        position: relative;
      }

      nav .nav__itemdrop {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -900px;
        background: var(--drop-bg);
        opacity: 0;
        border-top: 5px solid var(--accent);
      }

      nav .nav__itemdrop li {
        position: absolute;
        top: 0px;
      }
      
      nav .nav__itemdrop li:not(:first-child) ul {
        border-top: 5px solid var(--accent);
      }

      nav .nav__itemdrop li:last-child {
        border-bottom: 5px solid var(--accent);
      }

      nav .nav__itemdrop li a {
        font-size: 1.3rem;
        text-transform: uppercase;
        font-weight: 600;
        margin: 0.5rem;
        padding: 0.5rem;
        display: flex;
        text-align: left;
        justify-content: start;
      }

      nav #nav__list li:hover .nav__itemdrop,
      nav #nav__list li:focus-within .nav__itemdrop {
        top: auto;
        animation: dropdown 0.2s forwards;
      }
      
      nav .nav__itemdrop2,
      nav .nav__itemdrop3 {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -900px;
        left: 100%;
        background: var(--drop-bg);
        opacity: 0;
      }

      nav .nav__itemdrop li:hover .nav__itemdrop2,
      nav .nav__itemdrop li:focus-within .nav__itemdrop2 {
        top: 0;
        opacity: 1;
        animation: dropdown 0.2s forwards;
      }
      
      nav .nav__itemdrop2 li:hover .nav__itemdrop3,
      nav .nav__itemdrop2 li:focus-within .nav__itemdrop3 {
        top: 0px;
        animation: dropdown 0.2s forwards;
      }
      
      nav .nav__itemdrop li:not(:first-child) .nav__itemdrop2 li:hover ul.nav__itemdrop3,
      nav .nav__itemdrop li:not(:first-child) .nav__itemdrop2 li:focus-within ul.nav__itemdrop3 {
        top: -10%;
        animation: dropdown 0.2s forwards;
      }

      @media (max-width: 800px) {
        div#menu {
          padding: 0.6rem 4rem;
          justify-content: space-between;
        }

        div#menu div#hamburger {
          display: flex;
        }

        div#menu div#hamburger menu:hover span,
        div#menu div#hamburger menu:focus-within span {
          background: var(--accent);
        }

        div#menu div#logo svg {
          width: 70%;
        }

        div#menu div#social,
        div#menu div#user-interactions,
        nav {
          display: none;
        }
      }

      @keyframes rgbBorder {
        100%,
        0% {
          border-color: rgb(255, 0, 0);
        }
        8% {
          border-color: rgb(255, 127, 0);
        }
        16% {
          border-color: rgb(255, 255, 0);
        }
        24% {
          border-color: rgb(127, 255, 0);
        }
        32% {
          border-color: rgb(0, 255, 0);
        }
        40% {
          border-color: rgb(0, 255, 127);
        }
        48% {
          border-color: rgb(0, 255, 255);
        }
        56% {
          border-color: rgb(0, 127, 255);
        }
        64% {
          border-color: rgb(0, 0, 255);
        }
        72% {
          border-color: rgb(127, 0, 255);
        }
        80% {
          border-color: rgb(255, 0, 255);
        }
        88% {
          border-color: rgb(255, 0, 127);
        }
      }

      @keyframes dropdown { 
        0% {
          opacity: 0;
          transform: translate(0, -10%);
        }
        99% {
          opacity: 1;
          transform: none;
        }
        
        100% {
          opacity: 1;
          transform: none;
        }
      }

      @keyframes rgb {
      100%,0%{
        fill: rgb(255,0,0);
      }
      8%{
        fill: rgb(255,127,0);
      }
      16%{
        fill: rgb(255,255,0);
      }
      24%{
        fill: rgb(127,255,0);
      }
      32%{
        fill: rgb(0,255,0);
      }
      40%{
        fill: rgb(0,255,127);
      }
      48%{
        fill: rgb(0,255,255);
      }
      56%{
        fill: rgb(0,127,255);
      }
      64%{
        fill: rgb(0,0,255);
      }
      72%{
        fill: rgb(127,0,255);
      }
      80%{
        fill: rgb(255,0,255);
      }
      88%{
        fill: rgb(255,0,127);
      }
    }
    `;

    const rgbStyle = `
      nav {
        border-bottom: 5px solid transparent;
        animation: rgbBorder 4s infinite;
      }

      nav .nav__itemdrop {
        border-top: 5px solid transparent;
        animation: rgbBorder 4s infinite;
      }
      
      #menu #hamburger menu ul {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        animation: rgbBorder 4s infinite;
      }
      
      nav .nav__itemdrop li:not(:first-child) ul {
        border-top: 5px solid transparent;
        animation: rgbBorder 4s infinite;
      }
      
      nav .nav__itemdrop li:last-child {
        border-bottom: 5px solid transparent;
        animation: rgbBorder 4s infinite;
      }

      nav #nav__list li:hover .nav__itemdrop,
      nav #nav__list li:focus-within .nav__itemdrop {
        top: auto;
        animation: dropdown 0.2s forwards, rgbBorder 4s infinite;
      }

      nav .nav__itemdrop li:hover .nav__itemdrop2,
      nav .nav__itemdrop li:focus-within .nav__itemdrop2 {
        top: 0;
        opacity: 1;
        animation: dropdown 0.2s forwards, rgbBorder 4s infinite;
      }

      nav .nav__itemdrop2 li:hover .nav__itemdrop3,
      nav .nav__itemdrop2 li:focus-within .nav__itemdrop3 {
        top: 0px;
        animation: dropdown 0.2s forwards, rgbBorder 4s infinite;
      }

      nav .nav__itemdrop li:not(:first-child) .nav__itemdrop2 li:hover ul.nav__itemdrop3,
      nav .nav__itemdrop li:not(:first-child) .nav__itemdrop2 li:focus-within ul.nav__itemdrop3 {
        top: -10%;
        animation: dropdown 0.2s forwards, rgbBorder 4s infinite;
      }
    `;

    const setRGB = old => {
      style.textContent = `${old}${rgbStyle}`;
    };

    const removeRGB = old => {
      style.textContent = `${old}`;
    };

    let old = style.textContent;

    this.addEventListener('render', () => {
      let isRGB = window.document.body.getAttribute('data-theme') === 'rgb';

      if (isRGB) {
        setRGB(old);
      } else {
        removeRGB(old);
      }
    });

    (() => {
      let isRGB = window.document.body.getAttribute('data-theme') === 'rgb';

      if (isRGB) {
        setRGB(old);
      } else {
        removeRGB(old);
      }
    })();

    return style;
  }
}

customElements.define('header-navbar', HeaderNavbar);
