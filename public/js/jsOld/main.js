window.addEventListener("load", function(){

    $('#departament').on('change', function(){
       
      var url = location.origin;
       var city_id = $(this).val();

       if($.trim(city_id) != ''){

          $.get(url+'/profile/select_city',{ city_id: city_id }, function(cities) {

                $('#city').empty();
                $('#city').append("<option value=''>Seleccione una ciudad</option>");

                $.each(cities, function(index, name){
                   $('#city').append(`<option value="${index}">${name}</option>`);
                });

                $('#city').selectpicker('refresh');
          });
       }
    });

    $('#departamentAdmin').on('change', function(){
       
      var url = location.origin;
       var city_id = $(this).val();

       if($.trim(city_id) != ''){

          $.get(url+'/admin/user/select_city',{ city_id: city_id }, function(cities) {

                $('#city').empty();
                $('#city').append("<option value=''>Seleccione una ciudad</option>");

                $.each(cities, function(index, name){
                   $('#city').append(`<option value="${index}">${name}</option>`);
                });

                $('#city').selectpicker('refresh');
          });
       }
    });

   /*  $('#departamentoregistro').on('change', function(){
       
        var ciudad_id = $(this).val();
 
        if($.trim(ciudad_id) != ''){
 
           $.get('select_ciudad',{ ciudad_id: ciudad_id }, function(ciudades) {
 
                 $('#ciudad').empty();
                 $('#ciudad').append(`<option value=" ">Seleccione una ciudad</option>`);
 
                 $.each(ciudades, function(index, nombre){
                    console.log(nombre);
                    $('#ciudad').append(`<option value="${index}" {{ old('ciudad') == ${index} ? 'selected' : '' }}>${nombre}</option>`);
                 });
           });
        }
     }); */
 });