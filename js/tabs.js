function openTab( tabName ) {

	var tabColumn = document.getElementsByClassName( "center-column" );

	var i;
	for( i=0; i < tabColumn.length; i++ ) {
		tabColumn[i].style.display = "none";
	}

	document.getElementById( tabName ).style.display = "block";
}

function pickTab( evt, tabName ) {

	var tabButtons = document.getElementsByClassName( "tab-button" );
	for ( i=0; i < tabButtons.length; i++ ) {
		tabButtons[i].className = tabButtons[i].className.replace( " active", "" );
	}

	evt.currentTarget.className += " active";

	openTab( tabName );
}
