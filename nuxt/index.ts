import { join } from "path";

export default function() {
    const { nuxt } = this;
    if (!nuxt.options.components) {
        throw new Error('Nuxt components are not enabled.');
    }

    this.nuxt.hook('components:dirs', (dirs) => {
        console.log('components:dirs hook');
        dirs.push({
            path: join(__dirname, '../src/components'),
            prefix: 'azgra'
        })
    });
}