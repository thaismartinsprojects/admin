'use strict';

angular.module('adminThaisMartins')
.factory('ErrorMessagesService', function() {

    return {
        onSave: 'Erro ao salvar informações. Por favor, tente novamente.'
    };
});