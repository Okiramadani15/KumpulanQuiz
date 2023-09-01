CREATE TABLE jurusan(
    idjurusan VARCHAR(10) PRIMARY KEY NOT NULL,
    namajurusan VARCHAR(100) NOT NULL
);
    
INSERT INTO Jurusan (idjurusan, namajurusan) VALUES
("J01","Fabrikasi Logam"),
("J02","Listrik Tenaga"),
("J03","Elektronika"),
("J04","Mekatronika"),
("J05","Otomotif"),
("J06","Informatika"),
("J07","Alat berat"),
("J09","Arsitek");


SELECT * FROM Jurusan;

CREATE TABLE mahasiswa(
    nim VARCHAR(10) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL,
    tanggal_lahir VARCHAR (50) NOT NULL,
    alamat VARCHAR(20) NOT NULL,
    idjurusan VARCHAR(10) NOT NULL,
    namajurusan VARCHAR(100) NOT NULL,
    FOREIGN KEY(idjurusan) REFERENCES jurusan (idjurusan),
    FOREIGN KEY(namajurusan) REFERENCES jurusan (idjurusan)
);

INSERT INTO mahasiswa (nim,nama,tanggal_lahir,alamat,idjurusan, namajurusan) VALUES 
("M001", "oki",  "1996-02-15",  "Medan",    "J01","Fabrikasi Logam"),
("M002", "adif", "1998-03-17",   "Bogor",   "J02","Listrik Tenaga"),
("M003", "ogi", "1995-11-07",    "Bandung", "J03","Elektronika"),
("M004", "ramdan", "1999-04-12", "Garut",   "J04","Mekatronika"),
("M005", "rizky", "1999-08-10",  "Tasik",   "J05","Otomotif"),
("M006", "rizal", "2005-07-09",  "Sumedang","J06","Informatika"),
("M007", "riko", "2002-03-21",   "Semarang","J07","Alat berat"),
("M008", "uden", "2004-12-20",   "medan",   "J09","Arsitek"),
("M009", "frans", "1990-07-14",  "bandung", "J03","Elektronika");

SELECT * FROM mahasiswa;

CREATE TABLE dosen(
    iddosen VARCHAR(10) PRIMARY KEY NOT NULL,
    namadosen VARCHAR(100) NOT NULL,
    namajurusan VARCHAR (100) NOT NULL,
    FOREIGN KEY( namajurusan ) REFERENCES jurusan (namajurusan)
);

INSERT INTO dosen (iddosen,namadosen,namajurusan) VALUES 
("D001","Rubi Henjaya","Informatika"),
("D002","Febri haryadi","Sistem Informasi"),
("D003","Suhendra","Teknik Komputer");

SELECT * FROM Dosen;

CREATE TABLE matakuliah(
    Kodematkul VARCHAR(10) PRIMARY KEY NOT NULL,
    namamatkul VARCHAR(100) NOT NULL,
    SKS INTEGER (2)  NOT NULL
);

INSERT INTO matakuliah (Kodematkul,namamatkul,SKS) VALUES 
("MK01","data mining",20),
("MK02","basic",20),
("MK03","kerja bengkel",20),
("MK04","matematika",15),
("MK05","bahasa inggris",15);


SELECT * FROM matakuliah;

CREATE TABLE hasilbelajar(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim VARCHAR(10) NOT NULL,
    Kodematkul VARCHAR(10) NOT NULL,
    iddosen VARCHAR(10) NOT NULL,
    Nilai VARCHAR(2) DEFAULT 'C',
    FOREIGN KEY(nim) REFERENCES mahasiswa (nim),
    FOREIGN KEY(Kodematkul) REFERENCES matakuliah(Kodematkul),
    FOREIGN KEY(iddosen) REFERENCES dosen (iddosen)
);

INSERT INTO kontrak (nim,Kodematkul,iddosen) VALUES
("M001","MK001",'D001'),
("M002","MK002",'D002'),
("M003","MK003",'D003'),
("M004","MK003",'D002'),
("M005","MK003",'D002'),
("M006","MK002",'D001'),
("M007","MK001",'D003'),
("M008","MK001",'D002'),
("M009","MK002",'D001');

SELECT * FROM hasilbelajar;

UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 1;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 2;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 3;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 4;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 5;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 6;
UPDATE KRS SET Nilai = "C" WHERE ID_KRS = 7;
UPDATE KRS SET Nilai = "B" WHERE ID_KRS = 8;
UPDATE KRS SET Nilai = "D" WHERE ID_KRS = 9; 

ALTER TABLE Mahasiswa ADD Tanggal_lahir DATE;
UPDATE Mahasiswa set Tanggal_lahir='1996-02-15' WHERE Nim='M001';
UPDATE Mahasiswa set Tanggal_lahir='1998-03-10' WHERE Nim='M002';
UPDATE Mahasiswa set Tanggal_lahir='1995-02-17' WHERE Nim='M003';
UPDATE Mahasiswa set Tanggal_lahir='1999-08-09' WHERE Nim='M004';
UPDATE Mahasiswa set Tanggal_lahir='1999-12-20' WHERE Nim='M005';
UPDATE Mahasiswa set Tanggal_lahir='2005-04-13' WHERE Nim='M006';
UPDATE Mahasiswa set Tanggal_lahir='2000-05-02' WHERE Nim='M007';
UPDATE Mahasiswa set Tanggal_lahir='2003-07-07' WHERE Nim='M008';
UPDATE Mahasiswa set Tanggal_lahir='1990-04-30' WHERE Nim='M009';



-- challenge 1 tampilkan seluruh data mahasiswa dan jurusannya. 
SELECT *, Jurusan.Nama_Jurusan FROM Mahasiswa LEFT JOIN Jurusan ON Mahasiswa.ID_Jurusan = Jurusan.ID_Jurusan;

-- challenge 2 tampilkan mahasiswa yang memiliki umur dibawah 20 tahun.
SELECT *,DATE('now')-DATE(Tanggal_lahir) AS Umur from Mahasiswa WHERE umur <= 20;

-- challenge 3 tampilkan mahasiswa yang memilki nilai 'B' keatas.
SELECT DISTINCT Nim,(SELECT Nama FROM Mahasiswa WHERE Mahasiswa.Nim = KRS.Nim) AS Nama FROM KRS WHERE Nilai >= 'B';

-- challenge 4 tampilkan mahasiswa yang memiliki jumlah sks leboh dari 10.
SELECT Mahasiswa.Nim, Mahasiswa.Nama, SUM(Mata_kuliah.Sks) AS Total_sks
FROM Mahasiswa
JOIN KRS ON Mahasiswa.Nim = KRS.Nim
JOIN Mata_kuliah ON KRS.ID_matkul = Mata_kuliah.ID_matkul
GROUP BY Mahasiswa.Nim, Mahasiswa.Nama
HAVING Total_sks > 10;

-- challenge 5  tampilkan mahasiswa yang memilki KRS mata kuliah 'Data mining'.
SELECT Nim,(SELECT Nama FROM Mahasiswa WHERE Mahasiswa.Nim=KRS.Nim)AS Nama, ID_Matkul, (SELECT Nama FROM Mata_kuliah WHERE Mata_kuliah.ID_Matkul=KRS.ID_Matkul)AS Matakuliah FROM KRS;
-- challenge 6 tampilkan jumlah mahasiswa untuk setiap dosen.
SELECT *, (SELECT COUNT(DISTINCT NIM) FROM KRS WHERE KRS.ID_Dosen = Dosen.ID_Dosen) AS Jumlah_mahasiswa FROM Dosen;

-- challenge 7 urutkan mahasiswa berdasarkan umurnya.
SELECT *,DATE('now')-DATE(Tanggal_lahir) AS Umur FROM Mahasiswa ORDER BY Umur ASC;

-- challenge 8 tampilkan KRS yang harus di ulang(D,E), serta tampilkan data mahasiswa jurusan dan dosen,
--secara lengkap. gunakan mode JOIN dan WHERE clause(solusi terdiri dari 2 syntax SQL). 
SELECT DISTINCT * FROM KRS JOIN Mahasiswa ON KRS.Nim = Mahasiswa.Nim JOIN Jurusan ON Jurusan.ID_jurusan = Mahasiswa.ID_Jurusan JOIN Dosen ON Dosen.ID_Dosen = KRS.ID_Dosen WHERE Nilai >= 'D';








