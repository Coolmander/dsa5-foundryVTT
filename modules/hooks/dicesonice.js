export default function() {

    Hooks.once('diceSoNiceReady', (dice3d) => {
        dice3d.addColorset({
            name: 'mu',
            description: 'DSA5.mu',
            category: 'DSA5.dies',
            foreground: '#FFFFFF',
            background: '#b3241a',
            edge: '#b3241a',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'kl',
            description: 'DSA5.kl',
            category: 'DSA5.dies',
            foreground: '#FFFFFF',
            background: '#8259a3',
            edge: '#8259a3',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'in',
            description: 'DSA5.in',
            category: 'DSA5.dies',
            foreground: '#FFFFFF',
            background: '#388834',
            edge: '#388834',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'ch',
            description: 'DSA5.ch',
            category: 'DSA5.dies',
            foreground: '#FFFFFF',
            background: '#0d0d0d',
            edge: '#0d0d0d',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'ff',
            description: 'DSA5.ff',
            category: 'DSA5.dies',
            foreground: '#000000',
            background: '#d5b467',
            edge: '#d5b467',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'ge',
            description: 'DSA5.ge',
            category: 'DSA5.dies',
            foreground: '#000000',
            background: '#688ec4',
            edge: '#688ec4',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'ko',
            description: 'DSA5.ko',
            category: 'DSA5.dies',
            foreground: '#000000',
            background: '#a3a3a3',
            edge: '#a3a3a3',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'kk',
            description: 'DSA5.kk',
            category: 'DSA5.dies',
            foreground: '#000000',
            background: '#d6a878',
            edge: '#d6a878',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'attack',
            description: 'DSA5.attack',
            category: 'DSA5.dies',
            foreground: '#FFFFFF',
            background: '#b3241a',
            edge: '#b3241a',
            outline: '#b3241a',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'dodge',
            description: 'DSA5.dodge',
            category: 'DSA5.dies',
            foreground: '#FFFFFF',
            background: '#388834',
            edge: '#388834',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'parry',
            description: 'DSA5.parry',
            category: 'DSA5.dies',
            foreground: '#FFFFFF',
            background: '#388834',
            edge: '#388834',
            outline: '#FFFFFF',
            texture: 'none'
        });

        //game.dsa5.apps.DiceSoNiceCustomization = new DiceSoNiceCustomization()
    });
}

/*class DiceSoNiceCustomization {
    constructor() {
        const attrs = ["MU", "KL", "IN", "CH", "FF", "GE", "KO", "KK", "ATTACK", "DODGE", "PARRY"]
        for (let attr of attrs) {
            game.settings.register("dsa5", `dice3d_${attr}`, {
                name: `CHAR.${attr}`,
                hint: "",
                scope: "client",
                config: true,
                default: attr.toLowerCase(),
                type: String,
                choices: 
            });
        }


    }
}*/