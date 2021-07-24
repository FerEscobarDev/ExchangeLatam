<div class="row">
    <div class="col-xs-6 col-xs-offset-3">
        <div class="profile">
            <div class="avatar">
                @if (isset(Auth::user()->picture))
                    <img style="height: 160px !important;" src="{{ asset('storage/' . Auth::user()->picture) }}"
                        alt="Circle Image" class="img-circle img-responsive img-raised">
                @else
                    <img src="{{ asset('img_web/default.png') }}" alt="Circle Image"
                        class="img-circle img-responsive img-raised">
                @endif
            </div>
            <div class="name">
                <h3 class="title">{{ strtok(Auth::user()->name, ' ') . ' ' . strtok(Auth::user()->lastname, ' ') }}
                </h3>
                <h6 class="text-warning">
                    @if (auth()->user()->vip == 'yes')
                        Cliente VIP
                    @else
                        Cliente
                    @endif
                </h6>
                <a target="_blank" href="{{ $contact[0]->link }}" class="btn btn-just-icon btn-simple btn-info"><i class="fa fa-facebook"></i></a>
                <a target="_blank" href="{{ $contact[2]->link }}" class="btn btn-just-icon btn-simple btn-success"><i class="fa fa-whatsapp"></i></a>
                <a target="_blank" href="{{ $contact[1]->link }}" class="btn btn-just-icon btn-simple btn-danger"><i class="fa fa-instagram"></i></a>
                <a href="mailto:{{ $contact[3]->link }}" class="btn btn-just-icon btn-simple btn-warning"><i class="fa fa-envelope-o"></i></a>
            </div>
        </div>
    </div>
    {{-- Modal cambiar foto de perfil --}}
    <div class="col-xs-2 follow">
        <button class="btn btn-fab btn-danger" rel="tooltip" title="Cambiar fotografía" data-toggle="modal"
            data-target="#change_photo">
            <i class="fa fa-camera"></i>
        </button>
        <div class="modal fade" id="change_photo" tabindex="-1" role="dialog" aria-labelledby="#photo_modal"
            aria-hidden="true">
            <div class="modal-dialog" role="document">   
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="photo_modal"><strong>CAMBIO DE FOTOGRAFÍA</strong></h5>
                    </div>
                    <form action="{{ route('users.picture') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="modal-body text-center">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                                        <div class="fileinput-new thumbnail img-circle img-raised">
                                            @if (isset(Auth::user()->picture))
                                                <img src="{{ asset('storage/'. Auth::user()->picture) }}" alt="...">
                                            @else
                                                <img src="{{ asset('img_web/default.png') }}" alt="...">
                                            @endif
                                        </div>
                                        <div class="fileinput-preview fileinput-exists thumbnail img-circle img-raised">
                                        </div>
                                        <div>
                                            <span class="btn btn-raised btn-round btn-default btn-file">
                                                <span class="fileinput-new">Agregar Foto</span>
                                                <span class="fileinput-exists"><i class="fa fa-picture-o"></i>
                                                    Cambiar</span>
                                                <input required="required" type="file" name="picture" /></span>
                                            <br />
                                            <a href="#" class="btn btn-danger btn-round fileinput-exists"
                                                data-dismiss="fileinput"><i class="fa fa-trash"></i> Remover</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-primary">Guardar <i class="fa fa-photo"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>