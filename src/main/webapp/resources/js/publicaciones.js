$( document ).ready(function() {
	$(function () {
		   $('.panel-google-plus > .panel-footer > .input-placeholder, .panel-google-plus > .panel-google-plus-comment > .panel-google-plus-textarea > button[type="reset"]').on('click', function(event) {
		        var $panel = $(this).closest('.panel-google-plus');
		            $comment = $panel.find('.panel-google-plus-comment');
		            
		        $comment.find('.btn:first-child').addClass('disabled');
		        $comment.find('textarea').val('');
		        
		        $panel.toggleClass('panel-google-plus-show-comment');
		        
		        if ($panel.hasClass('panel-google-plus-show-comment')) {
		            $comment.find('textarea').focus();
		        }
		   });
		});
	
	$('#showPerfil').click(function(){
		$('#modal-perfil').modal('show');
	});
	
	$('#btn-delete-user').click(function(){
		if (confirm("¿Estás seguro de eliminar la cuenta de usuario?")){
			$.get( "borrarusuario", function() {

			});
		}
	});
	
	$('.delete-publicacion').click(function(){
		var id = $(this).data("id");
		if (confirm("¿Estás seguro de eliminar la publicación?")){
			$.get( "borrarpublicacion?id="+id, function() {
				location.href = "wall";
			});
		}
	});
	
	$('#btn-send-edit').click(function(){
		var currentPwd = $('#edit-pwd').val();
		var newPwd = $('#edit-new-pwd').val();
		
		if (currentPwd!=newPwd){
			$('#form-user').submit();
			$('#modal-perfil').modal('hide');
		}else{
			alert("La contraseña nueva no puede ser igual a la actual");
		}
	});
	
	
});

