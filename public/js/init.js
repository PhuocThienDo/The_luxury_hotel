// AJAX INIT
function $$$(id) {
	return document.getElementById(id);
}
function khoitao_ajax()
{
	var x;
	try 
	{
		x	=	new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
    	try 
		{
			x	=	new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(f) { x	=	null; }
  	}
	if	((!x)&&(typeof XMLHttpRequest!="undefined"))
	{
		x=new XMLHttpRequest();
  	}
	return  x;
}
function	Forward(url)
{
	window.location.href = url;
}
function	_postback()
{
	return void(1);
}
function send_nhantin(form_nhantin)
{
	name	= form_nhantin.name.value
	email	= form_nhantin.email.value
	message	= form_nhantin.message.value
	var	query	=	"act=send_nhantin&message="+message+"&email="+email+"&name="+name;
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
function send_datphong(frmdatphong)
{
	txtnguoilon		   	 = frmdatphong.txtnguoilon.value
	txtloaiphong		 = frmdatphong.txtloaiphong.value
	txtngayden			 = frmdatphong.txtngayden.value
	txtngaydi			 = frmdatphong.txtngaydi.value
	var ngayden_array 	= 	txtngayden.split('/');
	ngayden_str			= 	ngayden_array[1]+'/'+ngayden_array[0]+'/'+ngayden_array[2]
	var ngaydi_array 	= 	txtngaydi.split('/');
	ngaydi_str			= 	ngaydi_array[1]+'/'+ngaydi_array[0]+'/'+ngaydi_array[2]
	ngayden 			 = new Date(ngayden_str);
	ngaydi				 = new Date(ngaydi_str);
	times_hientai = new Date();
    if(ngayden !='')
	 {
		 if(ngayden <= times_hientai)
		 {
			 alert("Ngày đến phải lớn hơn ngày hiện tại\nCheck in to be greater than the current date!");
			 frmdatphong.txtngayden.focus();
			 return false;
		 }
		 if(ngaydi <= ngayden)
		 {
			 alert("Ngày đi phải lớn hơn ngày đến\nCheck out to be greater than the check in!");
			 frmdatphong.txtngaydi.focus();
			 return false;
		 }
	 }
	if(txtngayden == "Ngày đến" || txtngayden == "Check in")
	{
		alert("Chọn ngày đến\nPlease check in!");
		frmdatphong.txtngayden.focus();
		return false;
	}
	if(txtngaydi == "Ngày đi" || txtngaydi == "Check out")
	{
		alert("Chọn ngày đi\nPlease check out!");
		frmdatphong.txtngaydi.focus();
		return false;
	}
	if(txtloaiphong == 0)
	{
		alert("Chưa chọn phòng\nPlease choose room type!");
		frmdatphong.txtloaiphong.focus();
		return false;
	}
	if(txtnguoilon == 0)
	{
		alert("Chưa chọn người lớn\nPlease choose people!");
		frmdatphong.txtnguoilon.focus();
		return false;
	}
	return true;
}
function send_datphong2(frmdatphong2)
{
	txtngayden			 = frmdatphong2.txtngayden.value
	txtngaydi			 = frmdatphong2.txtngaydi.value
	txtnguoilon		   	 = frmdatphong2.txtnguoilon.value
	txtloaiphong		 = frmdatphong2.txtloaiphong.value
	var ngayden_array 	= 	txtngayden.split('/');
	ngayden_str			= 	ngayden_array[1]+'/'+ngayden_array[0]+'/'+ngayden_array[2]
	var ngaydi_array 	= 	txtngaydi.split('/');
	ngaydi_str			= 	ngaydi_array[1]+'/'+ngaydi_array[0]+'/'+ngaydi_array[2]
	ngayden 			 = new Date(ngayden_str);
	ngaydi				 = new Date(ngaydi_str);
	times_hientai = new Date();
    if(ngayden !='')
	 {
		 if(ngayden <= times_hientai)
		 {
			 alert("Ngày đến phải lớn hơn ngày hiện tại\nCheck in to be greater than the current date!");
			 frmdatphong2.txtngayden.focus();
			 return false;
		 }
		 if(ngaydi <= ngayden)
		 {
			 alert("Ngày đi phải lớn hơn ngày đến\nCheck out to be greater than the check in!");
			 frmdatphong2.txtngaydi.focus();
			 return false;
		 }
	 }
	if(txtngayden == "")
	{
		alert("Chọn ngày đến\nPlease check in!");
		frmdatphong2.txtngayden.focus();
		return false;
	}
	if(txtngaydi == "")
	{
		alert("Chọn ngày đi\nPlease check out!");
		frmdatphong2.txtngaydi.focus();
		return false;
	}
	if(txtnguoilon == 0)
	{
		alert("Chưa chọn người lớn\nPlease choose people!");
		frmdatphong2.txtnguoilon.focus();
		return false;
	}
	if(txtloaiphong == 0)
	{
		alert("Chưa chọn phòng\nPlease choose room type!");
		frmdatphong2.txtloaiphong.focus();
		return false;
	}
	return true;
}
function check_mxn()
{
	ma = document.getElementById('ma_xac_nhan').value;
	$.ajax({
		url:'/action.php',
        type: 'POST',
        data: 'act=check_ma_xac_nhan&ma='+ma,
        dataType: "html",
        success: function(data){
			$("#load_ma_xac_nhan").html(data);
        }
    });
}
function send_datphongfull(frmContact)
{
	var gioi_tinh 	 = $("input[name=gioi_tinh]:checked").val()
	txtfname 		 = frmContact.txtfname.value
	txtlname 		 = frmContact.txtlname.value
	txtemail		 = frmContact.txtemail.value
	email_khac		 = frmContact.email_khac.value
	txtphone		 = frmContact.txtphone.value
	fax		 		 = frmContact.fax.value
	cong_ty		 	 = frmContact.cong_ty.value
	quoc_tich		 = frmContact.quoc_tich.value
	thanh_pho		 = frmContact.thanh_pho.value
	txtaddress		 = frmContact.txtaddress.value
	
	txtngayden 		 = frmContact.txtngayden.value
	txtngaydi		 = frmContact.txtngaydi.value
	txtloaiphong	 = frmContact.txtloaiphong2.value
	txtgiaphong 	 = frmContact.txtgiaphong.value
	txtsophong		 = frmContact.txtsophong.value
	txtnguoilon		 = frmContact.txtnguoilon.value	
	txttreem		 = frmContact.txttreem.value
	txtthemnguoi	 = frmContact.txtthemnguoi.value
	txtsodem 		 = frmContact.txtsodem.value
	txttongtien 	 = frmContact.txttongtien.value
	ten_khach_them	 = frmContact.ten_khach_them.value
	
	ma_xac_nhan 	 		= frmContact.ma_xac_nhan.value
	check_ma_xac_nhan 	 	= frmContact.check_ma_xac_nhan.value
	id_lang 	 			= frmContact.id_lang.value

	var ngayden_array 	= 	txtngayden.split('/');
	ngayden_str			= 	ngayden_array[1]+'/'+ngayden_array[0]+'/'+ngayden_array[2]
	var ngaydi_array 	= 	txtngaydi.split('/');
	ngaydi_str			= 	ngaydi_array[1]+'/'+ngaydi_array[0]+'/'+ngaydi_array[2]
	ngayden 			 = new Date(ngayden_str);
	ngaydi				 = new Date(ngaydi_str);
	times_hientai = new Date();
	if(ngayden !='')
	 {
		 if(ngayden <= times_hientai)
		 {
			 if(id_lang==1) alert("Ngày đến phải lớn hơn ngày hiện tại!");
			 else alert("Check in to be greater than the current date!");
			 frmContact.txtngayden.focus();
			 return false;
		 }
		 if(ngaydi <= ngayden)
		 {
			 if(id_lang==1) alert("Ngày đi phải lớn hơn ngày đến!");
			 else alert("Check out to be greater than the check in!");
			 frmContact.txtngaydi.focus();
			 return false;
		 }
	 }
	if(txtfname =='')
	{
		if(id_lang==1) alert("Chưa nhập tên!");
		else alert("Enter your first name!");
		frmContact.txtfname.focus();
		return false;
	}
	if(txtlname =='')
	{
		if(id_lang==1) alert("Chưa nhập họ!");
		else alert("Enter your last name!");
		frmContact.txtlname.focus();
		return false;
	}
	if(txtemail =='')
	{
		if(id_lang==1) alert("Chưa nhập email!");
		else alert("Enter your email!");
		frmContact.txtemail.focus();
		return false;
	}
	if (!txtemail.match(/^([-\d\w][-.\d\w]*)?[-\d\w]@([-\w\d]+\.)+[a-zA-Z]{2,6}$/)){
		if(id_lang==1) alert("Email không hợp lệ!");
		else alert("Email not valid!");
		frmContact.txtemail.value = "";
		frmContact.txtemail.focus();
		return false;	
	}	
	if(txtngayden=="")
	{
		if(id_lang==1) alert("Chọn ngày đến!");
		else alert("Select Check in!");
		frmContact.txtngayden.focus();
		return false;
	}
	if(txtngaydi =="")
	{
		if(id_lang==1) alert("Chọn ngày đi!");
		else alert("Select Check out!");
		frmContact.txtngaydi.focus();
		return false;
	}
	if(ma_xac_nhan =="")
	{
		if(id_lang==1) alert("Chưa nhập mã xác nhận!");
		else alert("Enter captcha!");
		frmContact.ma_xac_nhan.focus();
		return false;
	}
	if(check_ma_xac_nhan =="no")
	{
		if(id_lang==1) alert("Sai mã xác nhận!");
		else alert("Wrong captcha!");
		frmContact.ma_xac_nhan.value="";
		frmContact.ma_xac_nhan.focus();
		return false;
	}
	else
	{
		var	query	=	"act=send_datphongfull&gioi_tinh="+gioi_tinh+"&txtfname="+txtfname+"&txtlname="+txtlname+"&txtemail="+txtemail+"&email_khac="+email_khac+"&txtphone="+txtphone+"&fax="+fax+"&cong_ty="+cong_ty+"&quoc_tich="+quoc_tich+"&thanh_pho="+thanh_pho+"&txtaddress="+txtaddress+"&txtngayden="+txtngayden+"&txtngaydi="+txtngaydi+"&txtloaiphong="+txtloaiphong+"&txtsophong="+txtsophong+"&txtnguoilon="+txtnguoilon+"&txtsophong="+txtsophong+"&txtthemnguoi="+txtthemnguoi+"&txttreem="+txttreem+"&ten_khach_them="+ten_khach_them+"&txtsodem="+txtsodem+"&txtgiaphong="+txtgiaphong+"&txttongtien="+txttongtien+"&id_lang="+id_lang;
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
function send_datphongfull2(frmContact)
{
	var gioi_tinh 	 = $("input[name=gioi_tinh]:checked").val()
	txtfname 		 = frmContact.txtfname.value
	txtlname 		 = frmContact.txtlname.value
	txtemail		 = frmContact.txtemail.value
	email_khac		 = frmContact.email_khac.value
	txtphone		 = frmContact.txtphone.value
	fax		 		 = frmContact.fax.value
	cong_ty		 	 = frmContact.cong_ty.value
	quoc_tich		 = frmContact.quoc_tich.value
	thanh_pho		 = frmContact.thanh_pho.value
	txtaddress		 = frmContact.txtaddress.value
	
	txtngayden 		 = frmContact.txtngayden.value
	txtngaydi		 = frmContact.txtngaydi.value
	txtloaiphong	 = frmContact.txtloaiphong.value
	txtsophong		 = frmContact.txtsophong.value
	txtnguoilon		 = frmContact.txtnguoilon.value	
	txttreem		 = frmContact.txttreem.value
	
	ma_xac_nhan 	 		= frmContact.ma_xac_nhan.value
	check_ma_xac_nhan 	 	= frmContact.check_ma_xac_nhan.value
	id_lang 	 			= frmContact.id_lang.value

	var ngayden_array 	= 	txtngayden.split('/');
	ngayden_str			= 	ngayden_array[1]+'/'+ngayden_array[0]+'/'+ngayden_array[2]
	var ngaydi_array 	= 	txtngaydi.split('/');
	ngaydi_str			= 	ngaydi_array[1]+'/'+ngaydi_array[0]+'/'+ngaydi_array[2]
	ngayden 			 = new Date(ngayden_str);
	ngaydi				 = new Date(ngaydi_str);
	times_hientai = new Date();
	if(ngayden !='')
	 {
		 if(ngayden <= times_hientai)
		 {
			 if(id_lang==1) alert("Ngày đến phải lớn hơn ngày hiện tại!");
			 else alert("Check in to be greater than the current date!");
			 frmContact.txtngayden.focus();
			 return false;
		 }
		 if(ngaydi <= ngayden)
		 {
			 if(id_lang==1) alert("Ngày đi phải lớn hơn ngày đến!");
			 else alert("Check out to be greater than the check in!");
			 frmContact.txtngaydi.focus();
			 return false;
		 }
	 }
	if(txtfname =='')
	{
		if(id_lang==1) alert("Chưa nhập tên!");
		else alert("Enter your first name!");
		frmContact.txtfname.focus();
		return false;
	}
	if(txtlname =='')
	{
		if(id_lang==1) alert("Chưa nhập họ!");
		else alert("Enter your last name!");
		frmContact.txtlname.focus();
		return false;
	}
	if(txtemail =='')
	{
		if(id_lang==1) alert("Chưa nhập email!");
		else alert("Enter your email!");
		frmContact.txtemail.focus();
		return false;
	}
	if (!txtemail.match(/^([-\d\w][-.\d\w]*)?[-\d\w]@([-\w\d]+\.)+[a-zA-Z]{2,6}$/)){
		if(id_lang==1) alert("Email không hợp lệ!");
		else alert("Email not valid!");
		frmContact.txtemail.value = "";
		frmContact.txtemail.focus();
		return false;	
	}	
	if(txtngayden=="")
	{
		if(id_lang==1) alert("Chọn ngày đến!");
		else alert("Select Check in!");
		frmContact.txtngayden.focus();
		return false;
	}
	if(txtngaydi =="")
	{
		if(id_lang==1) alert("Chọn ngày đi!");
		else alert("Select Check out!");
		frmContact.txtngaydi.focus();
		return false;
	}
	if(ma_xac_nhan =="")
	{
		if(id_lang==1) alert("Chưa nhập mã xác nhận!");
		else alert("Enter captcha!");
		frmContact.ma_xac_nhan.focus();
		return false;
	}
	if(check_ma_xac_nhan =="no")
	{
		if(id_lang==1) alert("Sai mã xác nhận!");
		else alert("Wrong captcha!");
		frmContact.ma_xac_nhan.value="";
		frmContact.ma_xac_nhan.focus();
		return false;
	}
	else
	{
		var	query	=	"act=send_datphongfull2&gioi_tinh="+gioi_tinh+"&txtfname="+txtfname+"&txtlname="+txtlname+"&txtemail="+txtemail+"&email_khac="+email_khac+"&txtphone="+txtphone+"&fax="+fax+"&cong_ty="+cong_ty+"&quoc_tich="+quoc_tich+"&thanh_pho="+thanh_pho+"&txtaddress="+txtaddress+"&txtngayden="+txtngayden+"&txtngaydi="+txtngaydi+"&txtloaiphong="+txtloaiphong+"&txtsophong="+txtsophong+"&txtnguoilon="+txtnguoilon+"&txttreem="+txttreem+"&id_lang="+id_lang;
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
function number_format (number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
function tinh_tien_phong()
{
	DPngayden2 	= document.getElementById('checkin2').value;
	DPngaydi2 	= document.getElementById('checkout2').value;
	so_phong 	= document.getElementById('txtsophong').value;
	gia_phong 	= document.getElementById('gia_phong').value;
	so_nguoi 	= document.getElementById('so_nguoi').value;
	themnguoi 	= document.getElementById('txtthemnguoi').value;
	if(DPngayden2!="" && DPngaydi2!=""){
		var ngaydi	= DPngaydi2;
		var ngayden = DPngayden2;  
		var ngay	= ngaydi.substring(0,2);
		var thang	= ngaydi.substring(3,5);
		var nam		= ngaydi.substring(6,10);
		var time 	= thang+'/'+ngay+'/'+nam;
		var times 	= new Date(time); 
		var moi		= times.getTime();
		var ngay1	= ngayden.substring(0,2);
		var thang1	= ngayden.substring(3,5);
		var nam1	= ngayden.substring(6,10);
		var time1 	= thang1+'/'+ngay1+'/'+nam1;
		var times1 	= new Date(time1); 
		var moi1	= times1.getTime();
		var songaytam = moi-moi1;
		var songay	  = songaytam/(3600*24000);
		$("#so_dem").val(songay);
		document.getElementById('txtnguoilon').value = so_nguoi*so_phong;
		$("#tong_tien").val(number_format(songay*so_phong*gia_phong+themnguoi*400000));
	}
}
function load_gia_phong(){
	txtloaiphong = document.getElementById('txtloaiphong').value;
	$.ajax({
		url:'/action.php',
        type: 'POST',
        data: 'act=load_gia_phong&txtloaiphong='+txtloaiphong,
        dataType: "html",
        success: function(data){
			$("#load_gia_phong").html(data);
			tinh_tien_phong();
        }
    });
}
function showLoader() {
	$(".loading_ajax").fadeIn(10);
}
function closeLoader() {
	$(".loading_ajax").fadeOut(100);
}
function closetoggle() {
	$(".navbar-toggle").click();
}
function load_page(id_lang,act,id){
	if(id==0) closetoggle();
	document.getElementById('container').innerHTML = "";
	showLoader();
    $.ajax({
		url:'/action.php',
        type: 'POST',
        data: 'act='+act+'&id='+id+'&ngon_ngu='+id_lang,
        dataType: "html",
        success: function(data){
			closeLoader();
			$("#container").html(data);
        }
    });
}