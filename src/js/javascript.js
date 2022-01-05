function monterLegende(c) {
    document.querySelector('.'+c).style.display = 'block';
    return anime({
        targets: '.'+c,
        translateY: '-2em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende(c='hero__legende') {
	document.querySelector('.hero__legende').style.display = 'block';
    return anime ({
        targets:'.'+c,
        translateY: '0', 
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function carrousel() {
    
	var article__carrousel = document.querySelectorAll('.article__carrousel');
    let d = 2000;
    let delta = 1000;

    article__carrousel.forEach(function(img,indice) {
        img.style.zIndex = article__carrousel.length - indice;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: article__carrousel,
        translateX: [{value: '280', duration: d},
                     {value: '-280', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (10*delta)+(9*d);
                         if (ind == 1) return (9*delta)+(8*d);
                         if (ind == 2) return(8*delta)+(7*d);
                         if (ind == 3) return (7*delta)+(6*d);
                         if (ind == 4) return (6*delta)+(5*d);
                         if (ind == 5) return (5*delta)+(4*d);
                         if (ind == 6) return (4*delta)+(3*d);
                         if (ind == 7) return (3*delta)+(2*d);
                         if (ind == 8) return (2*delta)+d;
                         if (ind == 9) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                        if (ind == 10) return 0;
                        return d;
                    }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            if (ind == 5) return (6*delta)+(5*d);
            if (ind == 6) return (7*delta)+(6*d);
            if (ind == 7) return (8*delta)+(7*d);
            if (ind == 8) return (9*delta)+(8*d);
            if (ind == 9) return (10*delta)+(9*d);
            if (ind == 10) return (11*delta)+(10*d);
            return (12*delta)+(11*d);
        }
    });
}