(function( window, document, $, Modernizr ){

  var transformProp = Modernizr.prefixed('transform');
  
  // Multiplane constructor
  function Multiplane() {
    // properties
    this.scrolled = 0;
    this.distance3d = 30000;
    
    // cache some jQuery objects
    this.$window = $(window);
    this.$document = $(document);
    
    // bind constructor to window.scroll event
    window.addEventListener( 'scroll', this, false);
  }
  
  // enables constructor to be used within event listener
  // like obj.addEventListener( eventName, this, false )
  Multiplane.prototype.handleEvent = function( event ) {
    if ( this[event.type] ) {
      this[event.type](event);
    }
  };
  
  Multiplane.prototype.scroll = function( event ) {
    // normalize scroll value from 0 to 1
    this.scrolled = this.$window.scrollTop() / ( this.$document.height() - this.$window.height() );
    this.transformScroll( this.scrolled );
  };

  // apply transform to content based on scroll position
  Multiplane.prototype.transformScroll = function( scroll ) {
    var style = {};
    style[ transformProp ] = 'translate3d( 0, 0,' + ( scroll * this.distance3d ) + 'px )';
    this.$content.css( style );
  };
  
  $(function(){
    var env = new Multiplane();
    env.$content = $('#content');
  });

})( window, window.document, window.jQuery, window.Modernizr );