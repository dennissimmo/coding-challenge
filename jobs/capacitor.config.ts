import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'dennissimmo.jobs',
    appName: 'jobs',
    webDir: 'dist/jobs',
    server: {
        url: 'http://192.168.1.229:4200',
        cleartext: true
    },
    bundledWebRuntime: false
};

export default config;
