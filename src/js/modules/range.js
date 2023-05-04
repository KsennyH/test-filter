import noUiSlider from 'nouislider';

const range = () => {
    const priceSlider = document.getElementById('price-slider');

    if(priceSlider) {
        noUiSlider.create(priceSlider, {
            start: [0, 9999],
            connect: true,
            tooltips: [false, true],
            step: 1,
            range: {
                'min': 0,
                'max': 9999
            }
        });

        const inputLower = document.getElementById('price-0');
        const inputUpper = document.getElementById('price-1');
        const inputs = [inputLower, inputUpper];

        priceSlider.noUiSlider.on('update', function(values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;
            priceSlider.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }
}

export default range;