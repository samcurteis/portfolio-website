import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const { ref: skills, inView: skillsInView } = useInView({
    triggerOnce: true
  });
  return (
    <div
      className={'component skills ' + (skillsInView ? 'show' : 'hidden')}
      ref={skills}
    >
      <span className='anchor' id='skills'></span>
      <h2 className='title'>Skills </h2>
      <div className='icons'>
        <div className='skill'>
          <i class='devicon-nextjs-original-wordmark'></i>
          <p className='skill-name'>Next.js</p>
        </div>
        <div className='skill'>
          <i class='devicon-typescript-plain'></i>
          <p className='skill-name'>Typescript</p>
        </div>
        <div className='skill'>
          <i class='devicon-vitest-plain'></i>
          <p className='skill-name'>Vitest</p>
        </div>
        <div className='skill'>
          <i class='devicon-csharp-plain'></i>
          <p className='skill-name'>C#</p>
        </div>
        <div className='skill'>
          <i class='devicon-go-original-wordmark'></i>
          <p className='skill-name'>GoLang</p>
        </div>
        <div className='skill'>
          <i class='devicon-terraform-plain'></i>
          <p className='skill-name'>Terraform</p>
        </div>
        <div className='skill'>
          <i class='devicon-cypressio-plain'></i>
          <p className='skill-name'>Cypress</p>
        </div>
        <div className='skill'>
          <i className='devicon-react-original'></i>
          <p className='skill-name'>React.js</p>
        </div>
        <div className='skill'>
          <i className='devicon-sass-original'></i>
          <p className='skill-name'>SASS</p>
        </div>
      </div>
    </div>
  );
}
