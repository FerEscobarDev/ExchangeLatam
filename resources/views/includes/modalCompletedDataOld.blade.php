      {{-- Modal pedir al usuario completar sus datos personales --}}
      @if(Auth::user()->info_ok != 1) 
         <script type="text/javascript">
            $(window).on('load',function(){
               $('#datacomplete').modal('show');
            });
         </script>
         <div class="modal fade" id="datacomplete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-notice modal-data">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="myModalLabel">¿Qué sigue?</h5>
                     <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                     <i class="material-icons">close</i>
                     </button>
                  </div>
                  <div class="modal-body">
                     <div class="instruction">
                        <div class="row">
                           <div class="col-md-8">
                              <strong>1. Completar datos personales</strong>
                              <p class="description">
                                 Lo primero que debe hacer es completar sus datos personales haciendo click en el 
                                 botón inferior tal cómo se muestra en la imagen, se requiere que complete toda 
                                 la información ya que es necesaria para realizar la facturación, haciendo esto 
                                 podrá empezar a realizar depósitos.
                              </p>
                           </div>
                           <div class="col-md-4">
                              <div class="picture">
                              <img src="{{asset('img_web/info.png')}}" alt="Thumbnail Image" class="rounded img-fluid" style="width: 100%">
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="instruction">
                        <div class="row">
                           <div class="col-md-8">
                              <strong>2. Verificar la cuenta</strong>
                              <p class="description">
                                 Una vez completa sus datos personales podrá verificar su cuenta haciendo click en el 
                                 botón rojo que se encuentra en la parte inferior tal cómo se muestra en la imagen, 
                                 allí debe subir la foto de su documento de identidad. Esto no es necesario para depósitar 
                                 pero es requerido para retirar, le recomendamos hacerlo ahora mismo para evitar retrasos 
                                 en sus retiros.
                           </p>
                           </div>
                           <div class="col-md-4">
                              <div class="picture">
                              <img src="{{asset('img_web/info_2.png')}}" alt="Thumbnail Image" class="rounded img-fluid" style="width: 100%">
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="instruction">
                        <div class="row">
                           <div class="col-md-8">
                              <strong>3. Registrar datos bancarios</strong>
                              <p class="description">
                                 Por último debe realizar el registro de la cuenta bancaria a la que desea que llegue el dinero de sus retiros, 
                                 para ello debe ir a la pestaña datos bancarios y hacer click en el botón como se muestra en la imagen,
                                 es importante verificar muy bien la información proporcionada ya que ésta sólo podra cambiarse una vez cada 6 meses. 
                                 La cuenta bancaria debe estar a su nombre, de lo contrario no se podrá transferir el dinero.
                              </p>
                           </div>
                           <div class="col-md-4">
                              <div class="picture">
                                 <img src="{{asset('img_web/info_3.png')}}" alt="Thumbnail Image" class="rounded img-fluid" style="width: 100%">
                              </div>
                           </div>
                        </div>
                     </div>
                     <p class="text-center">
                        Si tiene dudas puede contactarnos a nuestro <a target="_blank" href="{{ $contact[2]->link }}" class="text-success">whatsapp</a> 
                        <a target="_blank" href="{{ $contact[2]->link }}" class="btn btn-just-icon btn-simple btn-success"><i class="fa fa-whatsapp"></i></a> 
                        en horario de 8:00 AM a 6:00 PM en días hábiles.
                     </p>
                     <p class="text-center">Le invitamos a seguirnos en nuestras redes sociales <br>
                        <a target="_blank" href="{{ $contact[0]->link }}" class="btn btn-just-icon btn-simple btn-info"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="{{ $contact[1]->link }}" class="btn btn-just-icon btn-simple btn-danger"><i class="fa fa-instagram"></i></a>
                     </p>
                  </div>
                  <div class="modal-footer justify-content-center">
                     <button type="button" class="btn btn-info" data-dismiss="modal">Entendido</button>
                  </div>
               </div>
            </div>
         </div>
      @endif