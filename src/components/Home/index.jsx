import React from 'react'
import {Container,Wrapper,Main} from './style'
import Partner from '../Cards/PartnerCard'
export default function Home() {
    return (
        <Main>
            <Container>
                <Wrapper>
                    <Partner description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus eu, quam vitae vestibulum. In ullamcorper consectetur aliquam laoreet laoreet. Placerat dolor in dui, dignissim imperdiet malesuada felis neque. " button_text="See story" />
                    <Partner description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus eu, quam vitae vestibulum. In ullamcorper consectetur aliquam laoreet laoreet. Placerat dolor in dui, dignissim imperdiet malesuada felis neque. " button_text="See story" />
                    <Partner description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus eu, quam vitae vestibulum. In ullamcorper consectetur aliquam laoreet laoreet. Placerat dolor in dui, dignissim imperdiet malesuada felis neque. " button_text="See story" />
                </Wrapper>
            </Container>
        </Main>
    )
}
