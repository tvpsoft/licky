// 최상위 요소는 컨트롤러이름으로 아이디가 지정되는걸 이용하는 방식으로 돌아감 
AG.mainTabGroup = $.index;
$.index.open();

$.index.addEventListener('focus', function(e){
	var prevTabIndex = e.previousIndex;
	if(e.tab.title === $.meTab.title ){
		AG.loginController.requireLogin({
			success: function(){
			},
			cancel: function(){
				$.index.setActiveTab(prevTabIndex);
			}
		});
	};
});

AG.mainTabGroup.add( AG.notifyController.getView() );
// AG.notifyController.push({
	// message: "hello"
// });
// AG.notifyController.push({
	// message: "fucking"
// });
// AG.notifyController.push({
	// message: "world"
// });
