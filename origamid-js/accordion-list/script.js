
function initTabNav(){
    
    let tabMenu = document.querySelectorAll('.js-tabmenu li');
    
    let tabContent = document.querySelectorAll('.js-tabcontent section');
    
    if(tabMenu.length && tabContent.length){
        
        tabContent[0].classList.add('ativo');
        
        function activeTab(index){
        
            tabContent.forEach((section) => section.classList.remove('ativo'));
        
            tabContent[index].classList.add('ativo');
        }
        
        tabMenu.forEach((itemMenu, index) => {
        
            itemMenu.addEventListener('click', () => {
        
                activeTab(index);
            })
        });
    }

}

function initAccordion(){
    
    let accordionList = document.querySelectorAll('.js-accordion dt');

     if(accordionList.length){
         
         accordionList[0].classList.add('ativo');
         accordionList[0].nextElementSibling.classList.add('ativo');
         
         function activeAccordion(){
         
             this.classList.toggle('ativo');
         
             this.nextElementSibling.classList.toggle('ativo');
         }
         
         accordionList.forEach((item) => {
         
             item.addEventListener('click', activeAccordion);
         })
     }
}


initTabNav();

initAccordion();