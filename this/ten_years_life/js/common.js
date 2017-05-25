/**
 * Created by Administrator on 2017/4/29.
 */
//����id��ȡ����Ԫ��
function my$(id) {
  return document.getElementById(id);
}


/**
 * ���ܣ��˶���������ʱ��
 * @param element
 * @param target
 */
function easyAnimate(element, target) {
  clearInterval(element.setId);
  element.setId = setInterval(function () {
    //��ȡԪ�صĵ�ǰ��λ��
    var current = element.offsetLeft;//�������͵�
    //ÿ���ƶ��Ĳ���
    var step = 15;
    step = current < target ? step : -step;
    //���õ�ǰλ�õ�ֵ
    current += step;
    if (Math.abs(current - target) > Math.abs(step)) {
      element.style.left = current + "px";
    } else {
      element.style.left = target + "px";
      //����Ŀ��,�����ʱ��
      clearInterval(element.setId);
    }
  }, 20);
}





/*
 * element----Ҫ�ƶ���Ԫ��
 * target----�ƶ���Ŀ��
 * �����汾
 * */
/*
 * �ռ��汾�Ķ�������---��bug
 *
 * */
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
  },10);
}


//����id��ȡ��Ӧ��Ԫ��
function my$(id) {
  return document.getElementById(id);
}
/*
 * element---�����Ԫ��
 * attr---����
 * */
function getAttrValue(element,attr) {
  return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}



function getScroll() {
  return {
    left:window.pageXOffset || window.document.body.scrollLeft || document.documentElement.scrollLeft || 0,
    top:window.pageYOffset || document.body.scrollTop || document.documentElement.scrollLeft || 0
  };
}

