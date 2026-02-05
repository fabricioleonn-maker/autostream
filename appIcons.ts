import { AppConfig } from './types';

export const APP_LIBRARY: AppConfig[] = [
    {
        id: 'youtube',
        name: 'YouTube',
        packageName: 'com.google.android.youtube',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png',
        webUrl: 'https://www.youtube.com/tv',
        mode: 'webview'
    },
    {
        id: 'netflix',
        name: 'Netflix',
        packageName: 'com.netflix.mediaclient',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
        webUrl: 'https://www.netflix.com',
        mode: 'webview'
    },
    {
        id: 'spotify',
        name: 'Spotify',
        packageName: 'com.spotify.music',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
        webUrl: 'https://open.spotify.com',
        mode: 'webview'
    },
    {
        id: 'prime-video',
        name: 'Prime Video',
        packageName: 'com.amazon.avod.thirdpartyclient',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg',
        webUrl: 'https://www.primevideo.com',
        mode: 'webview'
    },
    {
        id: 'chrome',
        name: 'Chrome',
        packageName: 'com.android.chrome',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
        webUrl: 'https://www.google.com',
        mode: 'webview'
    },
    {
        id: 'waze',
        name: 'Waze',
        packageName: 'com.waze',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Waze_logo.svg',
        webUrl: 'https://www.waze.com/live-map',
        mode: 'webview'
    },
    {
        id: 'maps',
        name: 'Google Maps',
        packageName: 'com.google.android.apps.maps',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg',
        webUrl: 'https://www.google.com/maps',
        mode: 'webview'
    },
    {
        id: 'disney-plus',
        name: 'Disney+',
        packageName: 'com.disney.disneyplus',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
        webUrl: 'https://www.disneyplus.com',
        mode: 'webview'
    },
    {
        id: 'max',
        name: 'Max',
        packageName: 'com.hbo.hbonow',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Max_logo.svg',
        webUrl: 'https://www.max.com',
        mode: 'webview'
    },
    {
        id: 'instagram',
        name: 'Instagram',
        packageName: 'com.instagram.android',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
        webUrl: 'https://www.instagram.com',
        mode: 'webview'
    },
    {
        id: 'whatsapp',
        name: 'WhatsApp',
        packageName: 'com.whatsapp',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
        webUrl: 'https://web.whatsapp.com',
        mode: 'webview'
    },
    {
        id: 'bingola',
        name: 'Bingola',
        packageName: 'com.voke.bingola',
        iconUrl: '/bingola_logo.jpg',
        mode: 'native'
    },
    {
        id: 'star-ibo',
        name: 'Star IBO',
        packageName: 'com.star.ibo.dns',
        iconUrl: 'https://img.icons8.com/color/512/star.png',
        mode: 'native'
    }
];
