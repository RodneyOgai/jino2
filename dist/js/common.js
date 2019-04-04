

var app = new Vue ({
	el: '#app',
	data: {
		isWait: false,
		rightAnswer: null,
		isAccept: false,
		},
	methods: {
		uploadFile: function() {
            	this.isWait = true;
            	var vm = this;
				setTimeout(function () {
					var answer = ['Проверено', 'Отклонено'];
					var idx = Math.floor(Math.random() * answer.length);
					vm.rightAnswer = answer[idx];
					if(vm.rightAnswer === 'Проверено') {
						vm.isAccept = true;
					} else {
						vm.isAccept = false;
					}
					vm.isWait = false;
			    }, 3000);
        },
    },
})

