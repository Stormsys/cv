(function(){

    var email = 'dEBlQG5AXUB0QG9AZEBbQHNAeUBzQG1AckBvQHRAc0BdQHRAYUBbQG9AZ0BvQGlAZA==';

    var obsficateMailAddress = function(mail) {
       return  btoa(mail.replace(/@/, '[at]').replace(/\./, '[dot]').split('').reverse().join('@'));
    }

    var deobsficateMailAddress = function(mail) {
        return  atob(mail).split('@').reverse().join('').replace(/\[dot]/, '.').replace(/\[at]/, '@');
    }


    var populateM = function() {
        var targetElement = document.getElementById('om');
        var deobsficatedEmail = deobsficateMailAddress(email);
        var link = document.createElement('a');
        var linkText = document.createTextNode(deobsficatedEmail);

        link.appendChild(linkText);
        link.className = 'email';
        link.href = "mailto:" + deobsficatedEmail;
        targetElement.innerHTML = '';
        targetElement.appendChild(link);
    }


    var clickToReveal = document.getElementById('om-click');
    clickToReveal.addEventListener('click', function() {
        populateM();
    }, false);

}());