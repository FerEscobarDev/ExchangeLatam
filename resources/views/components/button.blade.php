@props([
    'color' => 'default',
    'type' => 'button',
    'toggle' => '',
    'target' => '',
    'dismiss' => ''
])
<div {{$attributes}}>
    <button type="{{$type}}" class="btn btn-{{$color}}" data-toggle="{{$toggle}}" data-target="{{$target}}" data-dismiss="{{$dismiss}}">{{$slot}}</button>
</div>