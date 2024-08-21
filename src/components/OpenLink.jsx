

export const OpenLink = ({title, url}) => {
  return (
    <div><a className='App-link' 
    href={url}
    target='_blanck'
    rel='noopener noreferrer' 
    > {title} </a></div>
  )
}
export default OpenLink;