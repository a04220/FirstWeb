var requestNoticeMsg ={
    url:"",
    callbackMethod : submitInfoResult,
    data:""
  };
 

 
	$(document).ready(function(){


        $("#notice_button_submmit").click(function(){ 
          
            if($("#notice_title").val()=='' ||$("#notice_content").val()=='')
            {
                alert("内容不能为空！");
            }
            else
            {
              if(confirm("是否确认发表通告？"))
              {
                  submit_NoticeInfo();
              }
            }  
        }); 

    }); 






    function submit_NoticeInfo(){

		var notice_title = $("#notice_title").val();

		var notice_build = $("#notice_build").val();
		var notice_unit = $("#notice_unit").val();
		var notice_room = $("#notice_room").val();

		var notice_author = $("#notice_author").val();

		var notice_content = $("#notice_content").val();
 
		//var formData = new FormData($("#uploadForm")[0]);

		//alert(document.getElementById("uploadForm").value);

		var formData = {"notice.title":notice_title,"notice.author":notice_author,
			"notice.content":notice_content,"buildNo":notice_build,"unitNo":notice_unit,"roomNo":notice_room}

		var urlString=requestNoticeMsg.url;

		var callBackName=requestNoticeMsg.callbackMethod;

		requestNoticeMsg.data=formData;



		getData(requestNoticeMsg);
    }

function submitInfoResult(result)
{
  if(result.success == true)
  {
    alert("提交信息成功");
  
  } 
  else
  {
    alert("提交信息失败" + result.type);
  }
  
}


