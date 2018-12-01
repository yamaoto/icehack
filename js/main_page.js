var check = []
var last_i = NaN;

Array.prototype.inArray = function(comparer) { 
    for(var i=0; i < this.length; i++) { 
        if(comparer(this[i])) return true; 
    }
    return false; 
}; 

Array.prototype.pushIfNotExist = function(element, comparer = (e) => (element == e)) { 
    if (!this.inArray(comparer)) {
        this.push(element);
        return true;
    }
    return false;
}; 

Array.prototype.except = function (value) {
    return this.filter( (element) => (element != value) );
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

$(document).ready(function() {
    Array(5).fill().map( (e, i) => {
        $(`#star${i}`).click(
            () => {
                $('.star').removeClass('orange-text text-lighten-1');
                $('.check').hide();
                Array(i + 1).fill().map( (e, i) => {
                    $(`#star${i}`).addClass('orange-text text-lighten-1');
                    $(`.check${i}_child`).removeClass('green'); 
                    $(`.check${i}_child`).addClass('white grey-text'); 
                });
                $(`#check${i}`).show();
                if (i != last_i)
                    check = [];
                last_i = i;
            }
        );
        $(`.check${i}_child`).click( function () {
            if (check.pushIfNotExist($( this ).data('id')))
            {
                $( this ).removeClass('white grey-text');
                $( this ).addClass('green');
            }
            else
            {
                check = check.except($( this ).data('id'));
                $( this ).removeClass('green');
                $( this ).addClass('white grey-text');
            }
        });
    });
    $('#submit').click(() => {
        var send = {};
        if (last_i != NaN){
            send['value'] = last_i;
            if (check.length > 0)
            {
                send['check'] = check.sort((a, b) => (a < b) ? -1: (a > b) ? 1 : 0).join(';');
            }
        }
        var comment = $('#textarea1').val();
        if (comment != '')
            send['comment'] = comment;
        if (Object.size(send) > 1)
            post('/submit', send);
    });
});