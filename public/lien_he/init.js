function send_lienhe(frmContact)
{
	name 	= frmContact.name.value
	email	= frmContact.email.value	
	title	= frmContact.title.value
	message	= frmContact.message.value
	ma_xac_nhan 	 	= frmContact.ma_xac_nhan.value
	check_ma_xac_nhan 	= frmContact.check_ma_xac_nhan.value
	if(name == '')
	{
		alert("Please enter full name !");
		frmContact.name.focus();
		return false;
	}
	if(email =='')
	{
		alert("Please enter email !");
		frmContact.email.focus();
		return false;
	}
	if (!email.match(/^([-\d\w][-.\d\w]*)?[-\d\w]@([-\w\d]+\.)+[a-zA-Z]{2,6}$/)){
		alert('Please email not true !');
		frmContact.email.focus();
		frmContact.email.focus();
		return false;	
	}	
	if(title == "")
	{
		alert("Please enter subject !");
		frmContact.title.focus();
		return false;
	}
	if(message =='')
	{
		alert("Please enter content !");
		frmContact.message.focus();
		return false;
	}
	if(ma_xac_nhan =="")
	{
		alert("Please enter captcha!");
		frmContact.ma_xac_nhan.focus();
		return false;
	}
	if(check_ma_xac_nhan =="no")
	{
		alert("Wrong captcha!");
		frmContact.ma_xac_nhan.value="";
		frmContact.ma_xac_nhan.focus();
		return false;
	}
	else
	{
		var	query	=	"act=send_lienhe&name="+name+"&email="+email+"&message="+message+"&title="+title;
		var http 	=	khoitao_ajax();
		try
		{
			http.open("POST", "/action.php");
			http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			http.setRequestHeader("Cache-control", "no-cache");		
			http.onreadystatechange = function()
			{
				if (http.readyState == 4)
				{
					if (http.status == 200)
					{
						x = http.responseText;
						
						alert(x);
						window.location.href = "/";
					}
					else
					{
							return false;
					}
				}
			}
			http.send(query);
		}
		catch (e)
		{
		}
		return false;
	}
}