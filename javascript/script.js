
/* ==========================================================================
                            NAVIGATION BAR INTERACTIONS
   ========================================================================== */

const burgerMenu = document.querySelector('.burger-menu-container > svg')
const countriesSelection = document.querySelector('.dropdown')

/* On click on the burgermenu */
burgerMenu.addEventListener('click', ()=>{
    /* Open the nav bar on small device by adding a className to the block targeted */
    document.querySelector('nav .nav-container-navigation-links').classList.toggle('open')

    /* Close the countries selector if open when we close the nav bar */
    if (countriesSelection.classList.contains('open')){
        countriesSelection.classList.toggle('open')
    }
})

/* Open the countries selector*/
document.querySelector('.country-choice').addEventListener('click', ()=>{
    /* Open the nav bar on small device by adding a className to the block targeted */
    countriesSelection.classList.toggle('open')

})
/* Close the countries selector*/
document.querySelector('div.country-choice-close').addEventListener('click', ()=>{
    /* Open the nav bar on small device by adding a className to the block targeted */
    countriesSelection.classList.toggle('open')

})

