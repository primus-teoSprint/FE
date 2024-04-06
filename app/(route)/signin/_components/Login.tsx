import rocketLogo from '../../../_assets/_images/rocketLogo.png'; 
import Image from 'next/image';

function Login(){
    return(

        <div>
            <p>안녕하세요</p>
            <p>프리무스입니다</p>
            <p>서비스 이용을 위해서 로그인 해주세요</p>
            <Image 
                src={rocketLogo} 
                alt='로켓로고'
                layout="responsive"  
                width={370}
                height={370}/> 
            <div>카카오로 시작하기</div>
            <div>비회원으로 둘러보기</div>
        </div>
    )
}

export default Login