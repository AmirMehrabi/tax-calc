        $("#finalPrice").keyup(function(event) {
            if (event.keyCode === 13) {
                $("#calculate").click();
            }
        });
        // Restricts input for the given textbox to the given inputFilter.
        function setInputFilter(textbox, inputFilter) {
          ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            textbox.addEventListener(event, function() {
              if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
              } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
              }
            });
          });
        }


        setInputFilter(document.getElementById("finalPrice"), function(value) {
          return /^\d*\.?\d*$/.test(value);
        });


        $("#calculate").click(function(){
          price = $("#finalPrice").val();
          final_price = parseFloat(Math.round(price / 1.09)).toFixed(0);
          final = Number(parseFloat(final_price).toFixed(2)).toLocaleString('en', {
                    minimumFractionDigits: 0
                  });

          $("#calculated-price").html("<hr><p class='h4 text-right font-weight-bold'>قیمت خام:<small> " + final + " ریال <small></p><hr> ");

        });
