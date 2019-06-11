(function(){
    const menu = {
        button: document.querySelectorAll('.btn'),
        targetCv: document.querySelector('#cv')
    };

    const skill = {
        bar: document.querySelectorAll('[data-bar]'),
        circle: document.querySelectorAll('[data-circle]')
    };

    function createBar(data,id){
        
        let bar = new ProgressBar.Line(id, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#38bf92',
            trailColor: '#eee',
            trailWidth: 4,
            svgStyle: {width: '100%', height: '100%'},
            text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
            },
            from: {color: '#FFEA82'},
            to: {color: '#ED6A5A'},
            step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });

        menu.button.forEach(cvBtn => {
            cvBtn.addEventListener('click', () => {
                if(cvBtn.getAttribute('id') == 'cv'){
                    bar.animate(data);  // Number from 0.0 to 1.0          
                } else {
                    bar.animate(0.0, {duration: 0});
                }
            });
        });
    };

    function createCircle(data, id){
        let bar = new ProgressBar.Circle(id, {
                color: '#38bf92',
                strokeWidth: 10,
                trailWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                autoStyleContainer: false
            },
    
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
              }
            
        });
        
        menu.button.forEach(cvBtn => {
            cvBtn.addEventListener('click', () => {
                if(cvBtn.getAttribute('id') == 'cv'){
                    bar.animate(data);  // Number from 0.0 to 1.0          
                } else {
                    bar.animate(0.0, {duration: 0});
                }
            });
        });
    };
    
    
    
    getSkillDataValue();
    function getSkillDataValue(){
        skill.bar.forEach(value => {
            createBar((value.dataset.bar/100).toFixed(2),"#" + value.getAttribute("id"));
        });
        
        skill.circle.forEach(value => {
            createCircle((value.dataset.circle/100).toFixed(2),"#" + value.getAttribute("id"));
        })
    }

}());