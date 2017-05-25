/*
 * Created by mango on 2017/5/6.
 */
var json1 = [
    {
        top:0,
        left:-165,
        opacity: 0.2,
        zIndex: 2
    },
    {
        top:0,
        left:75,
        opacity: 0.8,
        zIndex: 3
    },
    {
        top:0,
        left:315,
        opacity: 1,
        zIndex: 4
    },
    {
        top:0,
        left:685,
        opacity: 0.8,
        zIndex: 3
    },
    {
        top:0,
        left:925,
        opacity: 0.2,
        zIndex: 2
    }
];

 // * Created by mango on 2017/5/5.
 
function my$(id){
    return document.getElementById(id);
}


 // * element---�����Ԫ��
 // * attr---����
 // * 
function getAttrValue(element,attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}

//��������
function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//���趼�ﵽ��Ŀ��
        for(var attr in json){
            if(attr=="opacity"){//�ж������ǲ���opacity
                var current= getAttrValue(element,attr)*100;
                //ÿ���ƶ����ٲ�
                var target=json[attr]*100;//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step=(target-current)/10;//(Ŀ��-��ǰ)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//�ж������ǲ���zIndex
                element.style[attr]=json[attr];
            }else{//��ͨ������

                //��ȡ��ǰ��λ��----getAttrValue(element,attr)��ȡ�����ַ�������
                var current= parseInt(getAttrValue(element,attr))||0;
                //ÿ���ƶ����ٲ�
                var target=json[attr];//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step=(target-current)/10;//(Ŀ��-��ǰ)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;//���û��Ŀ������Ϊfalse
            }
        }
        if(flag){//���Ϊtrue
            clearInterval(element.timeId);
            if(fn){//����û������˻ص��ĺ���
                fn(); //��ֱ�ӵĵ���,
            }
        }
        //console.log("target:"+target+"current:"+current+"step:"+step);
    },10);
}

//��ȡliԪ��
var flag = true;
var reLiObj = my$("slider").children[0].children;

function assign(){
    for(var i = 0;i < reLiObj.length;i++){
        //��li��ǩ����Զ�������
        reLiObj[i].setAttribute("index",i);
        //��λͼƬ
        animate(reLiObj[i],json1[i],function (){
            flag=true;
        });
    }

}
assign();
//��Ӷ���Ч��
//��ȡ��ť
var left = my$("arrLeft");
var right = my$("arrRight");
//Ϊ��ť��ӵ���¼�
var count = 2;
left.onclick = function () {
    if(flag){
        flag=false;
        count++;
        json1.unshift(json1.pop());
        //ʹ�����������Ƴ�class
        for(var i = 0;i < reLiObj.length;i++){
            reLiObj[i].removeAttribute("class");
        }
        reLiObj[count%5].className="current";
        assign();//����ɢ��ͼƬ
    }
};
right.onclick=rightHandler;
function rightHandler() {

    if(flag){
        flag=false;
        count--;
        if(count<0){
            count=4;
        }
        //�ı�������Ԫ�ص�λ��
        json1.push(json1.shift());
        for(var i = 0;i < reLiObj.length;i++){
            reLiObj[i].removeAttribute("class");
        }
        reLiObj[count%5].className="current";
        assign();//����ɢ��ͼƬ
    }
}
//�Զ�����Ч��
var timeId = setInterval(rightHandler,1500);
var slider = my$("slider");
slider.onmouseover = function () {
    clearInterval(timeId);
};
slider.onmouseout = function () {
    timeId=setInterval(rightHandler,1500);
};