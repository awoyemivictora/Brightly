<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
    $('#button').click(function(){ 
        if(!$('#iframe').length) {
                $('#iframeHolder').html('<iframe id="iframe" src="https://notionforms.io/forms/classpass" width="700" height="450"></iframe>');
        }
    });   
});
</script>
 
<button id="button">Button</button>
<div id="iframeHolder"></div>