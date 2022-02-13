window.onload = function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.href.startsWith('https://openprocessing.org/sketch')) {
            link.onclick = function() {
                window.open(this.href, '_blank', 'width=600,height=400');
                return false;
            }
        }
    }  
}

window.onclick = function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.href.startsWith('https://openprocessing.org/sketch')) {
            link.onclick = function() {
                window.open(this.href, '_blank', 'width=600,height=400');
                return false;
            }
        }
    }  
}
