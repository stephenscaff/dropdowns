/**
 * Dropdowns
 * Dropdown component used for Activity Filters
 */
const Dropdowns = (() => {

  const html        = document.querySelector('html')
  const dds         = document.querySelectorAll('.js-dropdown')
  const ddTriggers  = document.querySelectorAll('.js-dropdown-trigger')
  let isOpen        = false

  return {

    /**
     * Init DDs
     */
    init: function() {
     this.handleClicks()
     this.closeOutside()
    },

    /**
     * Main Click Event
     */
    handleClicks() {
      ddTriggers.forEach((ddTrigger) => {
        ddTrigger.addEventListener('click', function(e) {
          e.preventDefault()

          let activeDD = e.target.parentElement
          let currentOpen = e.target.parentElement.classList.contains('is-open')

          if (!e.target) {
            dd.classList.remove('is-open')
          }

          dds.forEach((dd) => {
            Dropdowns.close(dd)
          });

          if (currentOpen) {
            Dropdowns.close(activeDD)
            isOpen = false
          } else  {
            Dropdowns.open(activeDD)
            isOpen = true
          }

          Dropdowns.closeOnEsc(activeDD)
        })
      })
    },

   /**
    * Close Clicked DD
    * @param element - single dd element
    */
    close(el) {
      el.classList.remove('is-open')
      el.classList.add('is-closed')
      el.setAttribute('aria-expanded', 'false')
      isOpen = false
    },

     /**
      * Open Clicked DD
      * @param element - single dd element
      */
     open(el) {
       el.classList.remove('is-closed')
       el.classList.add('is-open')
       el.setAttribute('aria-expanded', 'true')
       isOpen = true
     },

     /**
      * Close All
      * Helper to Close all open Drops
      */
     closeAll() {
       dds.forEach((dd) => {
         Dropdowns.close(dd)
       });
     },

    /**
     * Close Outside
     * Closed active drop if clicking outside of it.
     */
    closeOutside() {

      html.addEventListener('click', function(e) {
        dds.forEach((dd) => {
          let isClickInside = dd.contains(e.target)

          if (!isClickInside) {
            Dropdowns.close(dd)
          }
        })
      })
    },

    /**
     * Close DD on Excape Key
     * @param element - active dd
     */
    closeOnEsc(activeDD) {
      window.onkeydown = function(e) {
        if (e.keyCode === 27) {
          Dropdowns.close(activeDD)
        }
      }
    }
  }
})()

export default Dropdowns
