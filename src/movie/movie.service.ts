import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    findAll(limit:string){
        return `findAll funciona limite de ${limit} registro`;
    }

    findMovie(movieId: string ){
        return `findMovie funciona con el movieId = ${movieId}`
    }

    createMovie(movie:any){
        console.log (movie);
        return 'pelicula agregada';
    }

    updateMovie(movieId:string, movie:any){
        return `la pelicula ${movieId} se ha actualizado`;
    }

    deleteMovie(movieId:string){
        return `la pelicula ${movieId} se ha eliminado`;
    }
}

