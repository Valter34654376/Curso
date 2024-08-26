$('form').on('submit', function(e) {
    e.preventDefault();
    const NovaTarefa = $('#Nova-Tarefa').val();
    const NovoItem = $('<li></li>');
    $(`<p class="Nova-atividade">${NovaTarefa}</p>`).appendTo(NovoItem);
    $(`#listaTarefas`).append(NovoItem);
    $('#Nova-Tarefa').val('');

    $('#listaTarefas').on('click', '.Nova-atividade', function() {
        $(this).toggleClass('riscado');
    });
}) 


