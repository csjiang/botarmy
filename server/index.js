
import express       from 'express';
import bodyParser    from 'body-parser';
import {resolve}     from 'path';
import passport      from 'passport';
import PrettyError   from 'pretty-error';
import cookieSession from 'cookie-session';
// import main          from 'main';

// import api           from './api';

const resolvePublicFn =(fn)=>resolve(__dirname, '..', 'public', fn);

const prettyError = PrettyError();
const app = express();

console.log('spin the donald... a birth controlled replacement for spin the botle');

app.use(cookieSession( 
      { 
        name: 'session',
        keys: [process.env.SESSION_SECRET || 'an insecure key'],
      }
    )
  )
  .use( 
    bodyParser.urlencoded({ extended: true})
  )
  // .use( 
  //   bodyParser.join()
  // )
  .use( 
    passport.initialize()
  )
  .use( 
    passport.session()
  )
  .use( 
    express.static(resolve(__dirname, '..', 'public'))
  )
  // .use('/api', api)
  .get('/*', (rq, rs)=>rs.sendFile(resolvePublicFn, 'index.html'))
  .use((err, rq, rs, next)=>{ 
    console.log(prettyError.render(err))
    rs.status(500).send(err)
    next()
  }
);

if (module === require.main) { 
  console.log('PORT ', process.env.PORT||1138)
  const server = app.listen(
    process.env.PORT || 1138,
    ()=>{ 
      // console.log(`--- Started HTTP Server for ${pkg.name||''} ---`);
      console.log(`Listening on ${JSON.stringify(server.address())}`);
    }
  )
}


// export { app as default } 

