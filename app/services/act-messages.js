'use strict';

angular.module('adminThaisMartins')
.factory('ActMessagesService', function() {

    return {
        error: {
            onSave: 'Erro ao salvar informações. Por favor, tente novamente.'
        },
        success: {
            onSave: 'Informações salvas com sucesso!'
        }
    };
});