js-meta
=======


```js
	
	function formTemplate(args)
	/*@template
		<form>
			<label class="form label">{label}</label>
			<input type="{type}" name="{name}" value="value"/>
		</form>
	*/
	{
		var template = formTemplate.meta('template');
		for(var k in args){
			template = template.replace('{'+k+'}', args[k]);
		}
		return template;
	}

	var rs = formTemplate({label:'Email address:', type:'text', name:'email'});

	console.log(rs);
	
	
	function SearchPanel()
	/*@html
		<div>
			<input type="text" class="keyword"/>
			<button class="search_button"></button>
		</div>
	*/
	{
		var meta = SearchPanel.meta('html');
		var html = $(meta);
		
		var keywordInput = html.find('.keyword');
		var searchButton = html.find('button');
		
		searchButton.click(function(){
			ui.trigger('doSearch', keywordInput.val());
		});
		return ui;
	}
```	