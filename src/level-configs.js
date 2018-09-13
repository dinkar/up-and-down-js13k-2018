const rows = [
    [[0,0],[120,0],[240,0],[360,0],[480,0],[600,0],[720,0],[840,0],[960,0],[1080,0]],
    [[0,120],[120,120],[240,120],[360,120],[480,120],[600,120],[720,120],[840,120],[960,120],[1080,120]],
    [[0,240],[120,240],[240,240],[360,240],[480,240],[600,240],[720,240],[840,240],[960,240],[1080,240]],
    [[0,360],[120,360],[240,360],[360,360],[480,360],[600,360],[720,360],[840,360],[960,360],[1080,360]],
    [[0,440],[120,400],[240,400],[360,400],[480,400],[600,400],[720,400],[840,400],[960,400],[1080,400]],
];

const LevelConfigs = [
    {
        ball: [0, 30],
        endpoint: [1100, 510],
        desc: ['Level 1: Reach out for the star.',
            'Hint: Press Space, Left and Right.',
            'Press Enter to continue.'
        ]
    },
    {
        ball: [0, 30],
        endpoint: [100, 300],
        thorns: [...rows[2].slice(0,5),
            ...rows[2].slice(7,10)
        ],
        floors: rows[0],
        desc: ['Level 2: Watch out for the thorns!']
    },
    {
        ball: [0, 30],
        endpoint: [1100, 510],
        thorns: [...rows[2].slice(0,5),
            ...rows[2].slice(7,10)
        ],
        floors: [...rows[0],
            ...rows[3].slice(5)
        ],
        desc: ['Level 3: Nice! It only gets more fun.']
    },
    {
        ball: [0, 30],
        endpoint: [1100, 510],
        thorns: [
            ...rows[0].slice(7),
            ...rows[2].slice(4,7),
            ...rows[4].slice(2,4)
        ],
        floors: [
            ...rows[0].slice(0,7),
            ...rows[2].slice(0,4),
            ...rows[2].slice(7,9),
            ...rows[4].slice(4, 10)
        ],
        desc: ['Final Level: And here we are. The last one!']
    }
];


export default LevelConfigs;