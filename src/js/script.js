function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  const GlideOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 50,
    animationDuration: 700,

    breakpoints: {
      1440: {
        perView: 4,
      },
      1200: {
        perView: 3,
      },
      1024: {
        perView: 2,
        gap: 30,
      },
      768: {
        perView: 1,
        gap: 20,
      }
    }
  };

  let GlideGallery;

  ssm.addState({
    id: 'mobile',
    query: '(max-width: 1024px)',
    onEnter: function () {
      GlideGallery = new Glide(document.querySelector('#glide'), GlideOptions);
      GlideGallery.mount();
    },
    onLeave: function () {
      GlideGallery.destroy();
    }
  })
});
