document.addEventListener('DOMContentLoaded', () => {
  mcdonalds.onmousedown = function(event) { // (1) отследить нажатие

    let shiftX = event.clientX - mcdonalds.getBoundingClientRect().left;
    let shiftY = event.clientY - mcdonalds.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(pageX, pageY) {
      mcdonalds.style.left = pageX - shiftX + 'px';
      mcdonalds.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);
    
    // (4) положить мяч, удалить более ненужные обработчики событий
    mcdonalds.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      mcdonalds.onmouseup = null;
    };
  }
  mcdonalds.ondragstart = function() {
    return false;
  };


  lego.onmousedown = function(event) {

    let shiftX = event.clientX - lego.getBoundingClientRect().left;
    let shiftY = event.clientY - lego.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      lego.style.left = pageX - shiftX + 'px';
      lego.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    lego.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      lego.onmouseup = null;
    };

    lego.onclick = function() {
      document.lego.style.zInsex = prompt('zInsex?', '+2');
    };
  }
  lego.ondragstart = function() {
    return false;
  };
  

  nirvana.onmousedown = function(event) {

    let shiftX = event.clientX - nirvana.getBoundingClientRect().left;
    let shiftY = event.clientY - nirvana.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      nirvana.style.left = pageX - shiftX + 'px';
      nirvana.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    nirvana.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      nirvana.onmouseup = null;
    };
  }
  nirvana.ondragstart = function() {
    return false;
  };

  adidas.onmousedown = function(event) {

    let shiftX = event.clientX - adidas.getBoundingClientRect().left;
    let shiftY = event.clientY - adidas.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      adidas.style.left = pageX - shiftX + 'px';
      adidas.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    adidas.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      adidas.onmouseup = null;
    };
  }
  adidas.ondragstart = function() {
    return false;
  };

  hse.onmousedown = function(event) {

    let shiftX = event.clientX - hse.getBoundingClientRect().left;
    let shiftY = event.clientY - hse.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      hse.style.left = pageX - shiftX + 'px';
      hse.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    hse.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      hse.onmouseup = null;
    };
  }
  hse.ondragstart = function() {
    return false;
  };

  gta.onmousedown = function(event) {

    let shiftX = event.clientX - gta.getBoundingClientRect().left;
    let shiftY = event.clientY - gta.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      gta.style.left = pageX - shiftX + 'px';
      gta.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    gta.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      gta.onmouseup = null;
    };
  }
  gta.ondragstart = function() {
    return false;
  };

  supreme.onmousedown = function(event) {

    let shiftX = event.clientX - supreme.getBoundingClientRect().left;
    let shiftY = event.clientY - supreme.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      supreme.style.left = pageX - shiftX + 'px';
      supreme.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    supreme.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      supreme.onmouseup = null;
    };
  }
  supreme.ondragstart = function() {
    return false;
  };

  s7.onmousedown = function(event) {

    let shiftX = event.clientX - s7.getBoundingClientRect().left;
    let shiftY = event.clientY - s7.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      s7.style.left = pageX - shiftX + 'px';
      s7.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    s7.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      s7.onmouseup = null;
    };
  }
  s7.ondragstart = function() {
    return false;
  };

  alfabank.onmousedown = function(event) {

    let shiftX = event.clientX - alfabank.getBoundingClientRect().left;
    let shiftY = event.clientY - alfabank.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      alfabank.style.left = pageX - shiftX + 'px';
      alfabank.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    alfabank.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      alfabank.onmouseup = null;
    };
  }
  alfabank.ondragstart = function() {
    return false;
  };

})

