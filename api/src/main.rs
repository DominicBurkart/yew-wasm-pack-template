use actix_web::{web, App, Responder, HttpServer};
use actix_files::Files;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(
                web::scope("").default_service(
                    Files::new("", "../ui/dist")
                        .index_file("index.html")
                        .use_last_modified(true)
                )
            )
    })
    .bind("127.0.0.1:8088")?
    .run()
    .await
}