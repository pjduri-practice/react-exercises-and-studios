const HobbyLinks = () => {
    
    const hobbyLinks = [
        'www.flamewatercircus.com',
        'www.dndbeyond.com'
    ]

    return (
        <>
        <h3>My Hobbies</h3>
        <a href={hobbyLinks[0]}>Flamewater Circus</a><br />
        <a href={hobbyLinks[1]}>D&D Beyond</a>
        </>
    )

}

export default HobbyLinks