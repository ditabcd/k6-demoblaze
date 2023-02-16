// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import http from 'k6/http'

import { getCurrentStageIndex } from 'https://jslib.k6.io/k6-utils/1.3.0/index.js';

export const options = {
  stages: [
    { target: 30, duration: '30s' },
    { target: 100, duration: '1m' },
    { target: 30, duration: '30s' },
  ],
};

export default function main() {
  let response;
  const randomUsername = randomString(4);

  if (getCurrentStageIndex() === 0) {
    console.log('Running the first stage where the expected target is 30');
  } else if (getCurrentStageIndex() === 1) {
    console.log('Running the second stage where the expected target is 100');
  } else if (getCurrentStageIndex() === 2) {
    console.log('Running the third stage where the expected target is 30');
  }

  group('page_1 - https://www.demoblaze.com/index.html', function () {
    response = http.get('https://www.demoblaze.com/index.html', {
      headers: {
        dnt: '1',
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.6)

    response = http.get(
      'https://www.demoblaze.com/node_modules/bootstrap/dist/css/bootstrap.min.css',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://www.demoblaze.com/node_modules/video.js/dist/video-js.min.css', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/css/latofonts.css', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/css/latostyle.css', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/imgs/front.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/bm.png', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/Samsung1.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/nexus1.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/iphone1.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/node_modules/jquery/dist/jquery.min.js', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/node_modules/video.js/dist/video.min.js', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.demoblaze.com/node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.min.js',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://www.demoblaze.com/node_modules/tether/dist/js/tether.min.js', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.demoblaze.com/node_modules/bootstrap/dist/js/bootstrap.min.js',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://www.demoblaze.com/js/index.js', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/css/fonts/Lato-Regular.woff2', {
      headers: {
        dnt: '1',
        origin: 'https://www.demoblaze.com',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/config.json', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        dnt: '1',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://api.demoblaze.com/entries', {
      headers: {
        accept: '*/*',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://hls.demoblaze.com/index.m3u8', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/favicon.ico', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/imgs/galaxy_s6.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/imgs/Lumia_1520.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/imgs/Nexus_6.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/imgs/iphone_6.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/imgs/xperia_z5.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/imgs/HTC_M9.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.demoblaze.com/imgs/sony_vaio_5.jpg', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://hls.demoblaze.com/about_demo_hls_600k.m3u8', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://hls.demoblaze.com/about_demo_hls_600k00000.ts', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(11.3)

    response = http.post(
      'https://api.demoblaze.com/signup',
      `{"username":"dita-tester-${randomUsername}","password":"ZGl0YTEyMzQ="}`,
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json',
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    console.log("response iterasi: " + JSON.stringify(response));

    response = http.options('https://api.demoblaze.com/signup', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'content-type',
        'access-control-request-method': 'POST',
        origin: 'https://www.demoblaze.com',
        'sec-fetch-mode': 'cors',
      },
    })
  })
}