function getGachaData() {
    return [
        {id: '伝説の穿孔槌(2.000%)', val: 200},
        {id: '伝説の縫い針(2.000%)', val: 200},
        {id: '伝説の生糸(2.000%)', val: 200},
        {id: '伝説の装飾具(2.000%)', val: 200},
        {id: '匠の穿孔槌「片手剣」(10.240%)', val: 1024},
        {id: '匠の穿孔槌「両手剣」(10.200%)', val: 1020},
        {id: '匠の穿孔槌「弓」(10.240%)', val: 1024},
        {id: '匠の穿孔槌「自動弓」(10.200%)', val: 1020},
        {id: '匠の穿孔槌「杖」(10.230%)', val: 1023},
        {id: '匠の穿孔槌「魔導具」(10.200%)', val: 1020},
        {id: '匠の穿孔槌「手甲」(10.230%)', val: 1023},
        {id: '匠の穿孔槌「旋風槍」(10.230%)', val: 1023},
        {id: '匠の穿孔槌「抜刀剣」(10.230%)', val: 1023},
    ];
}

function gachaRun(config) {
    const min = 1;
    const max = 10000;

    const baseNumber = Math.random() * (max + 1 - min);
    const randomNum = Math.floor(baseNumber) + min;

    let result = [];
    let totalProb = 0;
    for (let i = 0; i < config.length; i++) {
        totalProb += config[i].val;
        if (randomNum <= totalProb) {
            result = config[i];
            break;
        }
    }
    return result;
}

function execute() {
    let result = '';
    for (let i = 0; i < 3; i++) {
        const item = gachaRun(getGachaData());
        result += JSON.stringify(item.id).replace(/"/g, '') + `<br>`;
    }
    document.getElementById("result").innerHTML = result;
}
