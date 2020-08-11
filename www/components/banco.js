/*$(document).on("click", "#listar", function(){
  $(location).attr('href', "listar.html");
});

$(document).on("click", "#cadastrar", function(){
  var parametros = {
    "titulo": $("#titulo").val(),
    "autor": $("#autor").val(),
    "ano": $("#ano").val(),
    "isbn": $("#isbn").val()
  }

  $.ajax({
    type:"post",
    url:"https://cadastro-biblioteca-alafe.c9users.io/cadastrar.php",
    data: parametros,
    success: function(data){
      $("#titulo").val("");
      $("#autor").val("");
      $("#ano").val("");
      $("#isbn").val("");
      navigator.Notification.alert(data);
    },
    error: function(data){
      navigator.Notification.alert("Erro: "+data);
    }
  })
});


$(document).on("change", "#lista", function(){
  var codigoSelecionado = $("option:selected", ("#lista")).val();

  $.ajax({
    type:"post",
    url:"https://cadastro-biblioteca-alafe.c9users.io/listarum.php",
    data: codigoSelecionado,
    dataType: "json",
    success: function(data){
      $.each(data.livros, function(i, dados){
        $("#txtcodigo").val(data.codigo),
        $("#txttitulo").val(data.titulo),
        $("#txtautor").val(data.autor),
        $("#txtano").val(data.ano),
        $("#txtisbn").val(data.isbn)
      })
    },
    error: function(data){
      navigator.Notification.alert("Erro: "+data);
    }
  })
});

$(document).on("click", "#deletar", function(){{
  $.ajax({
    type: "post",
    url: "https://cadastro-biblioteca-alafe.c9users.io/delete.php",
    data: $("txtcodigo").val(),
    success: function(data){
      navigator.Notification.alert(data);
      location.reload();
    },
    error: function(data){
      navigator.Notification.alert("Error: "+data);
    }
  })
}
$(document).on("click", "#listar", function(){
  $.ajax({
    type: "post",
    url: "https://cadastro-biblioteca-alafe.c9users.io/",
    dataType: "json",
    success: function(){
      var itemlista = "";
      $.each(data.livros, function(i, dados){
        itemlista += "<option value='"+dados.codigo  +"'>"+dados.titulo+"</option>";
      });
      $("#lista").html(itemlista);
    },
    error:function(data){
      navigator.Notification.alert("Erro"+data);
    }
  })
}*/